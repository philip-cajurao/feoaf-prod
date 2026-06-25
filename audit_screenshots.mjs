import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const SCREENSHOT_DIR = 'C:\\Users\\Phil\\.gemini\\antigravity\\brain\\94ebdf75-a5dc-4f83-a465-76a5e3be53aa\\screenshots';

// Ensure dir exists
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

const pages = [
  { url: 'http://localhost:3000/', name: 'home' },
  { url: 'http://localhost:3000/about', name: 'about' },
  { url: 'http://localhost:3000/about/board/mary-rose-lam', name: 'about_board_member' },
  { url: 'http://localhost:3000/programs', name: 'programs' },
  { url: 'http://localhost:3000/bootcamps', name: 'bootcamps' },
  { url: 'http://localhost:3000/outreach', name: 'outreach' },
  { url: 'http://localhost:3000/events', name: 'events' },
  { url: 'http://localhost:3000/events/join/annual-holiday-event', name: 'events_join' },
  { url: 'http://localhost:3000/funding-request', name: 'funding_request' },
  { url: 'http://localhost:3000/funding-request/apply', name: 'funding_request_apply' },
  { url: 'http://localhost:3000/funding-request/business-loan-program', name: 'funding_request_business_loan' },
  { url: 'http://localhost:3000/sponsors', name: 'sponsors' },
  { url: 'http://localhost:3000/sponsors?tab=packages', name: 'sponsors_packages' },
  { url: 'http://localhost:3000/sponsors/be-a-sponsor', name: 'sponsors_be_a_sponsor' },
  { url: 'http://localhost:3000/sponsors/sponsor-a-kid', name: 'sponsors_sponsor_a_kid' },
  { url: 'http://localhost:3000/sponsors/sponsorships/annual/platinum-sponsor', name: 'sponsors_annual_platinum' },
  { url: 'http://localhost:3000/sponsors/sponsorships/single/gold-sponsor', name: 'sponsors_single_gold' },
  { url: 'http://localhost:3000/join', name: 'join' },
  { url: 'http://localhost:3000/join/academic-scholarship', name: 'join_academic_scholarship' },
  { url: 'http://localhost:3000/kids-bootcamp', name: 'kids_bootcamp' },
  { url: 'http://localhost:3000/donate', name: 'donate' },
  { url: 'http://localhost:3000/donation', name: 'donation' },
  { url: 'http://localhost:3000/new-member', name: 'new_member' },
  { url: 'http://localhost:3000/new-sponsor', name: 'new_sponsor' },
  { url: 'http://localhost:3000/contacts', name: 'contacts' },
  { url: 'http://localhost:3000/welcome-springgala', name: 'welcome_springgala' },
  { url: 'http://localhost:3000/sponsor-springgala', name: 'sponsor_springgala' },
];

async function captureAndAnalyze(page, url, name, viewport, suffix) {
  console.log(`  Capturing ${name} at ${viewport.width}x${viewport.height}...`);
  await page.setViewportSize(viewport);
  
  let navError = null;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(2000);
    } catch (e2) {
      navError = e2.message;
      console.log(`  ERROR navigating to ${url}: ${e2.message}`);
      return { screenshotPath: null, buttonAnalysis: null, error: navError };
    }
  }
  
  await page.waitForTimeout(1000);
  
  const screenshotPath = path.join(SCREENSHOT_DIR, `${name}_${suffix}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`  Saved: ${screenshotPath}`);
  
  const buttonAnalysis = await page.evaluate(() => {
    const results = { buttons: [], issues: [], backButtons: [] };
    
    const clickables = Array.from(document.querySelectorAll('button, a[role="button"], [class*="btn"], [class*="button"], input[type="submit"], input[type="button"], a'));
    const uniqueClickables = [];
    const seen = new Set();
    clickables.forEach(el => {
      if (!seen.has(el)) {
        seen.add(el);
        uniqueClickables.push(el);
      }
    });
    
    const visibleClickables = uniqueClickables.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
    
    visibleClickables.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      const text = (el.textContent?.trim().substring(0, 60) || el.getAttribute('aria-label') || el.getAttribute('alt') || '').replace(/\s+/g, ' ');
      
      const info = {
        tag: el.tagName,
        text,
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity,
        cursor: style.cursor,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        paddingLeft: style.paddingLeft,
        paddingRight: style.paddingRight,
        fontSize: style.fontSize,
        color: style.color,
        backgroundColor: style.backgroundColor,
        borderRadius: style.borderRadius,
        href: el.href || null,
      };
      
      // Detect issues
      if (rect.height < 24 && el.tagName === 'BUTTON') {
        results.issues.push(`Button too short: "${text}" (${Math.round(rect.height)}px height)`);
      }
      if (rect.top < 0) {
        results.issues.push(`Element partially off-screen top: "${text}" (top: ${Math.round(rect.top)}px)`);
      }
      if (rect.left < -10) {
        results.issues.push(`Element partially off-screen left: "${text}" (left: ${Math.round(rect.left)}px)`);
      }
      
      results.buttons.push(info);
    });
    
    // Check for back buttons
    const allElements = Array.from(document.querySelectorAll('*'));
    const backBtns = allElements.filter(el => {
      const text = el.textContent?.trim() || '';
      const ariaLabel = (el.getAttribute('aria-label') || '').toLowerCase();
      const classes = (el.className?.toString() || '').toLowerCase();
      const href = el.getAttribute('href') || '';
      
      const isBackText = text === 'Back' || text === '← Back' || text === '< Back' || 
                         text === 'Go Back' || text.match(/^←?\s*back$/i) ||
                         ariaLabel.includes('back') || classes.includes('back-btn') || 
                         classes.includes('back-button');
      const isInteractive = el.tagName === 'A' || el.tagName === 'BUTTON' || 
                            el.getAttribute('role') === 'button' || el.onclick;
      const rect = el.getBoundingClientRect();
      
      return isBackText && isInteractive && rect.width > 0 && rect.height > 0;
    });
    
    backBtns.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      const style = window.getComputedStyle(btn);
      results.backButtons.push({
        text: btn.textContent?.trim().substring(0, 60).replace(/\s+/g, ' '),
        top: Math.round(rect.top),
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
        fontSize: style.fontSize,
        color: style.color,
        tag: btn.tagName,
        href: btn.getAttribute('href'),
      });
    });
    
    // Check for overlapping visible clickables in the viewport
    const viewportClickables = visibleClickables.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.top < window.innerHeight && 
             rect.left >= 0 && rect.left < window.innerWidth;
    });
    
    for (let i = 0; i < viewportClickables.length; i++) {
      const r1 = viewportClickables[i].getBoundingClientRect();
      const t1 = (viewportClickables[i].textContent?.trim().substring(0, 30) || '').replace(/\s+/g, ' ');
      for (let j = i + 1; j < viewportClickables.length; j++) {
        const r2 = viewportClickables[j].getBoundingClientRect();
        const t2 = (viewportClickables[j].textContent?.trim().substring(0, 30) || '').replace(/\s+/g, ' ');
        
        // Skip if one contains the other
        if (viewportClickables[i].contains(viewportClickables[j]) || 
            viewportClickables[j].contains(viewportClickables[i])) continue;
        
        const overlap = !(r1.right < r2.left || r1.left > r2.right || r1.bottom < r2.top || r1.top > r2.bottom);
        if (overlap) {
          const overlapWidth = Math.min(r1.right, r2.right) - Math.max(r1.left, r2.left);
          const overlapHeight = Math.min(r1.bottom, r2.bottom) - Math.max(r1.top, r2.top);
          if (overlapWidth > 5 && overlapHeight > 5) {
            results.issues.push(`Button overlap: "${t1}" (${Math.round(r1.width)}x${Math.round(r1.height)}) overlaps "${t2}" (${Math.round(r2.width)}x${Math.round(r2.height)}) by ${Math.round(overlapWidth)}x${Math.round(overlapHeight)}px`);
          }
        }
      }
    }
    
    return results;
  });
  
  return { screenshotPath, buttonAnalysis };
}

async function main() {
  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const report = {};
  
  for (const pageInfo of pages) {
    console.log(`\nAuditing: ${pageInfo.name} (${pageInfo.url})`);
    report[pageInfo.name] = { 
      url: pageInfo.url, 
      desktop: null, 
      mobile: null, 
      desktopIssues: [], 
      mobileIssues: [],
      desktopBackButtons: [],
      mobileBackButtons: [],
      desktopButtonCount: 0,
      mobileButtonCount: 0,
    };
    
    // Desktop
    const desktopResult = await captureAndAnalyze(page, pageInfo.url, pageInfo.name, 
      { width: 1280, height: 800 }, 'desktop');
    
    if (desktopResult) {
      report[pageInfo.name].desktop = desktopResult.screenshotPath;
      if (desktopResult.buttonAnalysis) {
        report[pageInfo.name].desktopIssues = desktopResult.buttonAnalysis.issues || [];
        report[pageInfo.name].desktopBackButtons = desktopResult.buttonAnalysis.backButtons || [];
        report[pageInfo.name].desktopButtonCount = desktopResult.buttonAnalysis.buttons?.length || 0;
      }
      if (desktopResult.error) {
        report[pageInfo.name].desktopIssues.push(`Navigation error: ${desktopResult.error}`);
      }
    }
    
    // Mobile
    const mobileResult = await captureAndAnalyze(page, pageInfo.url, pageInfo.name,
      { width: 375, height: 812 }, 'mobile');
    
    if (mobileResult) {
      report[pageInfo.name].mobile = mobileResult.screenshotPath;
      if (mobileResult.buttonAnalysis) {
        report[pageInfo.name].mobileIssues = mobileResult.buttonAnalysis.issues || [];
        report[pageInfo.name].mobileBackButtons = mobileResult.buttonAnalysis.backButtons || [];
        report[pageInfo.name].mobileButtonCount = mobileResult.buttonAnalysis.buttons?.length || 0;
      }
      if (mobileResult.error) {
        report[pageInfo.name].mobileIssues.push(`Navigation error: ${mobileResult.error}`);
      }
    }
  }
  
  await browser.close();
  
  const reportPath = path.join(SCREENSHOT_DIR, 'audit_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\nReport saved to: ${reportPath}`);
  
  console.log('\n=== AUDIT SUMMARY ===');
  let pagesWithIssues = [];
  let pagesOk = [];
  
  for (const [name, data] of Object.entries(report)) {
    const allIssues = [...data.desktopIssues, ...data.mobileIssues];
    if (allIssues.length > 0 || data.desktopBackButtons.length > 0 || data.mobileBackButtons.length > 0) {
      pagesWithIssues.push(name);
      console.log(`\n[${name}]: ${allIssues.length} issues, ${data.desktopBackButtons.length + data.mobileBackButtons.length} back buttons`);
      allIssues.slice(0, 3).forEach(i => console.log(`  - ${i}`));
      if (allIssues.length > 3) console.log(`  ... +${allIssues.length - 3} more`);
      if (data.desktopBackButtons.length > 0) {
        console.log(`  Back buttons:`);
        data.desktopBackButtons.forEach(b => console.log(`    [Desktop] "${b.text}" at top:${b.top}px left:${b.left}px size:${b.width}x${b.height}px`));
      }
      if (data.mobileBackButtons.length > 0) {
        data.mobileBackButtons.forEach(b => console.log(`    [Mobile] "${b.text}" at top:${b.top}px left:${b.left}px size:${b.width}x${b.height}px`));
      }
    } else {
      pagesOk.push(name);
    }
  }
  
  console.log(`\nPages with issues: ${pagesWithIssues.join(', ')}`);
  console.log(`Pages OK: ${pagesOk.join(', ')}`);
  console.log('\nDone!');
}

main().catch(console.error);
