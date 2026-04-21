/**
 * ETC PPA Revenue Estimator
 * GB-native indicative ranges (H2 2025). Illustrative only.
 * Prices are pay-as-produced (PaP) £/MWh, excluding REGOs unless stated.
 */
(function () {
  'use strict';

  var container = document.getElementById('ppa-estimator');
  if (!container) return;

  // GB H2 2025 indicative PaP ranges by technology × tenor.
  // Low / high bound £/MWh. Mid used for illustrative revenue.
  var ranges = {
    'offshore': {
      label: 'Offshore Wind',
      hours: 4200,
      tenors: {
        '3Y': { low: 75, high: 78 },
        '5Y': { low: 73, high: 76 },
        '10Y': { low: 70, high: 74 }
      }
    },
    'onshore': {
      label: 'Onshore Wind',
      hours: 3200,
      tenors: {
        '3Y': { low: 55, high: 62 },
        '5Y': { low: 52, high: 58 },
        '10Y': { low: 50, high: 55 }
      }
    },
    'solar': {
      label: 'Solar PV',
      hours: 1100,
      tenors: {
        '3Y': { low: 48, high: 55 },
        '5Y': { low: 45, high: 52 },
        '10Y': { low: 42, high: 48 }
      }
    }
  };

  var state = {
    tech: 'onshore',
    tenor: '5Y',
    capacity: 50
  };

  function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function calculate() {
    var tech = ranges[state.tech];
    if (!tech) return null;
    var band = tech.tenors[state.tenor];
    if (!band) return null;
    var mid = (band.low + band.high) / 2;
    var annualMWh = state.capacity * tech.hours;
    var annualRevenueLow = annualMWh * band.low;
    var annualRevenueHigh = annualMWh * band.high;
    var tenor = parseInt(state.tenor, 10);
    var contractValueLow = annualRevenueLow * tenor;
    var contractValueHigh = annualRevenueHigh * tenor;
    return {
      low: band.low,
      high: band.high,
      mid: mid,
      annualMWh: annualMWh,
      annualRevenueLow: annualRevenueLow,
      annualRevenueHigh: annualRevenueHigh,
      contractValueLow: contractValueLow,
      contractValueHigh: contractValueHigh,
      tenorYears: tenor
    };
  }

  function render() {
    var r = calculate();
    if (!r) return;

    var techKeys = Object.keys(ranges);
    var tenorKeys = ['3Y', '5Y', '10Y'];

    var html = '<div style="display:flex;flex-direction:column;gap:1.5rem">';

    // Technology selector
    html += '<div>';
    html += '<label style="display:block;font-size:11px;font-weight:600;color:var(--etc-500);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">Technology</label>';
    html += '<div class="estimator-tech-grid">';
    for (var i = 0; i < techKeys.length; i++) {
      var key = techKeys[i];
      var tcls = key === state.tech ? 'estimator-tech-btn active' : 'estimator-tech-btn';
      html += '<button class="' + tcls + '" data-tech="' + key + '">' + ranges[key].label + '</button>';
    }
    html += '</div></div>';

    // Tenor selector
    html += '<div>';
    html += '<label style="display:block;font-size:11px;font-weight:600;color:var(--etc-500);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">Tenor</label>';
    html += '<div class="estimator-tech-grid">';
    for (var t = 0; t < tenorKeys.length; t++) {
      var tn = tenorKeys[t];
      var tncls = tn === state.tenor ? 'estimator-tech-btn active' : 'estimator-tech-btn';
      html += '<button class="' + tncls + '" data-tenor="' + tn + '">' + tn + '</button>';
    }
    html += '</div></div>';

    // Capacity slider
    html += '<div>';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">';
    html += '<label style="font-size:11px;font-weight:600;color:var(--etc-500);text-transform:uppercase;letter-spacing:0.05em">Capacity</label>';
    html += '<span class="mono" style="font-size:14px;color:#fff;font-weight:500">' + state.capacity + ' MW</span>';
    html += '</div>';
    html += '<input type="range" class="estimator-slider" min="5" max="400" step="5" value="' + state.capacity + '" id="est-slider">';
    html += '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--etc-600);margin-top:4px"><span>5 MW</span><span>400 MW</span></div>';
    html += '</div>';

    // Results
    html += '<div class="estimator-result" style="display:flex;flex-direction:column;gap:1rem">';
    html += '<div class="estimator-row"><span style="font-size:12px;color:var(--etc-500)">Indicative PaP range</span><span class="mono" style="font-size:18px;color:#fff;font-weight:700">£' + r.low + '&ndash;' + r.high + '<span style="color:var(--etc-500);font-size:11px;font-weight:400">/MWh</span></span></div>';
    html += '<div class="estimator-row"><span style="font-size:12px;color:var(--etc-500)">Est. annual generation</span><span class="mono" style="font-size:14px;color:var(--etc-300)">' + Math.round(r.annualMWh / 1000) + 'k MWh</span></div>';
    html += '<div class="estimator-row"><span style="font-size:12px;color:var(--etc-500)">Est. annual revenue</span><span class="mono" style="font-size:14px;color:var(--etc-300)">£' + (r.annualRevenueLow / 1e6).toFixed(1) + '–' + (r.annualRevenueHigh / 1e6).toFixed(1) + 'M</span></div>';
    html += '<div class="estimator-row" style="border-top:1px solid var(--border-subtle);padding-top:1rem"><span style="font-size:12px;color:var(--etc-400);font-weight:500">' + r.tenorYears + '-year contract value</span><span class="mono" style="font-size:20px;color:var(--signal);font-weight:700">£' + (r.contractValueLow / 1e6).toFixed(0) + '–' + (r.contractValueHigh / 1e6).toFixed(0) + 'M</span></div>';
    html += '</div>';

    html += '<p style="font-size:10px;color:var(--etc-600);line-height:1.6">ETC indicative prices, H2 2025 ranges. Illustrative only — not a binding offer. Prices exclude REGOs unless stated. Actual pricing subject to curtailment, shape, credit, structure, and market conditions at time of quote.</p>';

    html += '</div>';

    container.innerHTML = html;

    // Wire up technology buttons
    var techBtns = container.querySelectorAll('[data-tech]');
    for (var a = 0; a < techBtns.length; a++) {
      techBtns[a].addEventListener('click', function (e) {
        state.tech = e.currentTarget.getAttribute('data-tech');
        render();
      });
    }

    // Wire up tenor buttons
    var tenorBtns = container.querySelectorAll('[data-tenor]');
    for (var b = 0; b < tenorBtns.length; b++) {
      tenorBtns[b].addEventListener('click', function (e) {
        state.tenor = e.currentTarget.getAttribute('data-tenor');
        render();
      });
    }

    // Wire up capacity slider
    var slider = container.querySelector('#est-slider');
    if (slider) {
      slider.addEventListener('input', function (e) {
        state.capacity = parseInt(e.target.value, 10);
        render();
      });
    }
  }

  render();
})();
