/**
 * ETC PPA Revenue Estimator
 * Interactive widget — gives value before asking for data.
 */
(function () {
  'use strict';

  var container = document.getElementById('ppa-estimator');
  if (!container) return;

  var markets = {
    'ERCOT': { solar: 24.50, wind: 22.80 },
    'PJM': { solar: 31.20, wind: 28.90 },
    'MISO': { solar: 26.80, wind: 25.10 },
    'CAISO': { solar: 28.40, wind: 32.50 },
    'Nordpool': { solar: 38.60, wind: 34.20 },
    'EPEX': { solar: 42.10, wind: 36.80 },
    'N2EX': { solar: 48.90, wind: 42.30 },
    'AEMO': { solar: 32.70, wind: 38.40 }
  };

  var state = {
    market: 'ERCOT',
    tech: 'solar',
    capacity: 50
  };

  function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function calculate() {
    var data = markets[state.market];
    if (!data) return null;
    var price = data[state.tech] || 30;
    var hours = state.tech === 'solar' ? 2100 : 3200;
    var annualMWh = state.capacity * hours;
    var annualRevenue = annualMWh * price;
    var tenYear = annualRevenue * 10;
    return {
      price: price,
      annualMWh: annualMWh,
      annualRevenue: annualRevenue,
      tenYear: tenYear
    };
  }

  function render() {
    var r = calculate();
    if (!r) return;

    var marketKeys = Object.keys(markets);

    var html = '<div style="display:flex;flex-direction:column;gap:1.5rem">';

    // Market selector
    html += '<div>';
    html += '<label style="display:block;font-size:11px;font-weight:600;color:var(--etc-500);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">Market</label>';
    html += '<div class="estimator-market-grid">';
    for (var i = 0; i < marketKeys.length; i++) {
      var m = marketKeys[i];
      var cls = m === state.market ? 'estimator-btn active' : 'estimator-btn';
      html += '<button class="' + cls + '" data-market="' + m + '">' + m + '</button>';
    }
    html += '</div></div>';

    // Technology selector
    html += '<div>';
    html += '<label style="display:block;font-size:11px;font-weight:600;color:var(--etc-500);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem">Technology</label>';
    html += '<div class="estimator-tech-grid">';
    var techs = ['solar', 'wind'];
    for (var t = 0; t < techs.length; t++) {
      var tech = techs[t];
      var tcls = tech === state.tech ? 'estimator-tech-btn active' : 'estimator-tech-btn';
      html += '<button class="' + tcls + '" data-tech="' + tech + '">' + tech.charAt(0).toUpperCase() + tech.slice(1) + '</button>';
    }
    html += '</div></div>';

    // Capacity slider
    html += '<div>';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">';
    html += '<label style="font-size:11px;font-weight:600;color:var(--etc-500);text-transform:uppercase;letter-spacing:0.05em">Capacity</label>';
    html += '<span class="mono" style="font-size:14px;color:#fff;font-weight:500">' + state.capacity + ' MW</span>';
    html += '</div>';
    html += '<input type="range" class="estimator-slider" min="5" max="500" step="5" value="' + state.capacity + '" id="est-slider">';
    html += '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--etc-600);margin-top:4px"><span>5 MW</span><span>500 MW</span></div>';
    html += '</div>';

    // Results
    html += '<div class="estimator-result" style="display:flex;flex-direction:column;gap:1rem">';
    html += '<div class="estimator-row"><span style="font-size:12px;color:var(--etc-500)">Indicative P50 price</span><span class="mono" style="font-size:18px;color:#fff;font-weight:700">$' + r.price.toFixed(2) + '<span style="color:var(--etc-500);font-size:11px;font-weight:400">/MWh</span></span></div>';
    html += '<div class="estimator-row"><span style="font-size:12px;color:var(--etc-500)">Est. annual generation</span><span class="mono" style="font-size:14px;color:var(--etc-300)">' + Math.round(r.annualMWh / 1000) + 'k MWh</span></div>';
    html += '<div class="estimator-row"><span style="font-size:12px;color:var(--etc-500)">Est. annual revenue</span><span class="mono" style="font-size:14px;color:var(--etc-300)">$' + (r.annualRevenue / 1e6).toFixed(1) + 'M</span></div>';
    html += '<div class="estimator-row" style="border-top:1px solid var(--border-subtle);padding-top:1rem"><span style="font-size:12px;color:var(--etc-400);font-weight:500">10-year contract value</span><span class="mono" style="font-size:20px;color:var(--signal);font-weight:700">$' + (r.tenYear / 1e6).toFixed(1) + 'M</span></div>';
    html += '</div>';

    html += '<p style="font-size:10px;color:var(--etc-600);line-height:1.6">Indicative only. Based on current P50 market data. Actual pricing subject to counterparty, tenor, and deal structure. Full pricing available on the platform.</p>';

    html += '</div>';

    container.innerHTML = html;
    bindEvents();
  }

  function bindEvents() {
    // Market buttons
    var marketBtns = container.querySelectorAll('[data-market]');
    for (var i = 0; i < marketBtns.length; i++) {
      marketBtns[i].addEventListener('click', function () {
        state.market = this.getAttribute('data-market');
        render();
      });
    }

    // Tech buttons
    var techBtns = container.querySelectorAll('[data-tech]');
    for (var j = 0; j < techBtns.length; j++) {
      techBtns[j].addEventListener('click', function () {
        state.tech = this.getAttribute('data-tech');
        render();
      });
    }

    // Slider
    var slider = document.getElementById('est-slider');
    if (slider) {
      slider.addEventListener('input', function () {
        state.capacity = parseInt(this.value, 10);
        render();
      });
    }
  }

  // Initial render
  render();
})();
