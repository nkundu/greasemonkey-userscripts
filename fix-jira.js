// ==UserScript==
// @name     JIRA Fixer
// @version  1
// @grant    none
// @include  https://*.atlassian.net/browse/*
// @run-at   document-idle
// ==/UserScript==



function fix(){
  var spots = document.querySelectorAll('[data-testid="ref-spotlight-target-status-and-approval-spotlight"]');
  var status = spots[0];
  var destContainer = spots[1];

  try {
  	destContainer.prepend(status);
  } catch {}
  
  var aiCrap = document.querySelectorAll('[data-testid="issue.views.issue-base.context.status-and-approvals-wrapper.status-and-approval"]')
  try {
    if (aiCrap.length > 0)
  		aiCrap[0].remove();
  } catch {}
  
  setTimeout(fix,100);
}

fix();
