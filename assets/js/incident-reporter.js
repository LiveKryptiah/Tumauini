/**
 * Municipal Government of Tumauini, Isabela
 * MDRRMO & Rescue 3325 Incident & Disaster Dispatch Reporter
 * Strictly follows GEMINI.md Design System Guidelines.
 */

(function () {
  'use strict';

  // 1. All 46 Official Barangays of Tumauini
  const tumauiniBarangays = [
    "Barangay 1 (Poblacion)", "Barangay 2 (Poblacion)", "Barangay 3 (Poblacion)", "Barangay 4 (Poblacion)",
    "Annafunan", "Antagan I", "Antagan II", "Arcon", "Balug", "Banigan", "Bantug", "Bayabo East",
    "Caligayan", "Camasi", "Camp Samal", "Compania", "Cumabao", "Fermeldy", "Fugu", "Lalauanan",
    "Lanna", "Lapogan", "Lingaling", "Liwanag", "Malamag East", "Malamag West", "Maligaya", "Minanga",
    "Moldero", "Pangal Sur", "Parang", "San Mateo", "San Pedro", "San Vicente", "Santa",
    "Santa Catalina", "Santa Visitacion", "Santo Niño", "Sinippil", "Sisimon", "Tunggui",
    "Ugac Norte", "Ugac Sur", "Villa Cruz", "Villa Pereda", "Villa Rey"
  ];

  // 2. Hazard Categories & Responder Routing
  const incidentCategories = {
    flood: {
      title: "Rising Floodwaters / River Surge",
      icon: "🌊",
      unit: "Rescue 3325 WASAR (Water Search & Rescue) Unit · Barangay Quick Response Team",
      guidance: "Move immediately to higher ground or designated evacuation center. Do not attempt to cross submerged roads or spillways. Shut off household electrical breakers."
    },
    road_blockage: {
      title: "Road Obstruction / Landslide / Fallen Tree",
      icon: "🚧",
      unit: "Municipal Engineering Heavy Equipment & Chainsaw Operations Unit",
      guidance: "Keep distance from unstable debris slopes. Warn approaching motorists and use designated bypass routes. Do not attempt to clear high-voltage entangled branches."
    },
    power_hazard: {
      title: "Downed Power Line / Electrical Hazard",
      icon: "⚡",
      unit: "ISELCO II Emergency Lineman Crew & BFP Standby Unit",
      guidance: "STAY AT LEAST 10 METERS (33 FEET) AWAY. Treat all fallen wires as energized and lethal. Avoid wet ground, metal fences, and water puddles."
    },
    medical: {
      title: "Medical Emergency / Vehicular Trauma",
      icon: "🚑",
      unit: "Rescue 3325 Advanced Life Support (ALS) Ambulance Team",
      guidance: "Keep patient calm and stationary. Do not move injured individuals unless in immediate life danger. Keep access road clear for incoming ambulance sirens."
    },
    fire: {
      title: "Fire / Structural / Grassfire",
      icon: "🔥",
      unit: "BFP Tumauini Fire Station Engine Crew & MDRRMO Tanker Unit",
      guidance: "Evacuate all occupants immediately. Crawl low under smoke. Do not re-enter burning structures. Meet responders at designated street access point."
    },
    other: {
      title: "Public Safety Hazard / Structural Damage",
      icon: "⚠️",
      unit: "MDRRMO Quick Response Team & Barangay Tanod Desk",
      guidance: "Cordon off hazard area and keep children at safe distance until municipal safety officers arrive on site."
    }
  };

  // 3. Modal Opening & Closing
  window.openIncidentReporterModal = function () {
    const modal = document.getElementById('incident-reporter-modal');
    if (!modal) return;
    renderIncidentForm();
    modal.classList.add('open', 'active');
    document.body.style.overflow = 'hidden';
  };

  window.closeIncidentReporterModal = function () {
    const modal = document.getElementById('incident-reporter-modal');
    if (!modal) return;
    modal.classList.remove('open', 'active');
    document.body.style.overflow = '';
  };

  // 4. Render Form
  window.renderIncidentForm = function () {
    const container = document.getElementById('incident-modal-body');
    if (!container) return;

    container.innerHTML = `
      <form id="incident-report-form" onsubmit="handleIncidentSubmit(event)">
        <div id="incident-form-error" style="display: none; background: #FEE2E2; border: 1px solid #F87171; color: #991B1B; font-size: 12px; padding: 10px 14px; border-radius: var(--radius-card); margin-bottom: 14px;"></div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);" for="inc-category">
            Hazard / Incident Category *
          </label>
          <select id="inc-category" class="form-input" style="width: 100%; height: 42px; border-radius: var(--radius-card); border: 1px solid var(--hairline); padding: 8px 12px; font-family: inherit; font-size: 13px; background: var(--canvas); color: var(--ink);" required onchange="updateIncidentGuidancePreview()">
            <option value="flood">🌊 Rising River Floodwaters / Overflow (Cagayan & Pinacanauan)</option>
            <option value="road_blockage">🚧 Road Blockage / Landslide / Fallen Tree</option>
            <option value="power_hazard">⚡ Downed Electric Wire / Power Hazard</option>
            <option value="medical">🚑 Medical Emergency / Vehicular Trauma</option>
            <option value="fire">🔥 Fire / Structural / Agricultural Grassfire</option>
            <option value="other">⚠️ Other Public Safety Hazard</option>
          </select>
        </div>

        <div style="margin-bottom: 16px;">
          <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
            Urgency / Severity Level *
          </label>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
            <label style="display: flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: var(--radius-card); background: var(--field); cursor: pointer; font-size: 12px; font-weight: 600;">
              <input type="radio" name="inc-severity" value="critical" style="accent-color: #CE1126;">
              <span style="color: #CE1126;">Critical (Life Threat)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: var(--radius-card); background: var(--field); cursor: pointer; font-size: 12px; font-weight: 600;">
              <input type="radio" name="inc-severity" value="high" checked style="accent-color: #EA580C;">
              <span style="color: #EA580C;">High Priority</span>
            </label>
            <label style="display: flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: var(--radius-card); background: var(--field); cursor: pointer; font-size: 12px; font-weight: 600;">
              <input type="radio" name="inc-severity" value="moderate" style="accent-color: #CA8A04;">
              <span style="color: #CA8A04;">Moderate</span>
            </label>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
          <div>
            <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);" for="inc-barangay">
              Barangay Location *
            </label>
            <select id="inc-barangay" class="form-input" style="width: 100%; height: 42px; border-radius: var(--radius-card); border: 1px solid var(--hairline); padding: 8px 12px; font-family: inherit; font-size: 13px; background: var(--canvas); color: var(--ink);" required>
              ${tumauiniBarangays.map(b => `<option value="${b}">${b}</option>`).join('')}
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);" for="inc-landmark">
              Exact Landmark / Purok / Street *
            </label>
            <input type="text" id="inc-landmark" class="form-input" style="width: 100%; height: 42px; border-radius: var(--radius-card); border: 1px solid var(--hairline); padding: 8px 12px; font-family: inherit; font-size: 13px; background: var(--canvas); color: var(--ink);" placeholder="e.g. Purok 3 near Chapel" required>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
          <div>
            <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);" for="inc-name">
              Reporter Full Name *
            </label>
            <input type="text" id="inc-name" class="form-input" style="width: 100%; height: 42px; border-radius: var(--radius-card); border: 1px solid var(--hairline); padding: 8px 12px; font-family: inherit; font-size: 13px; background: var(--canvas); color: var(--ink);" placeholder="Juan De La Cruz" required>
          </div>
          <div>
            <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);" for="inc-phone">
              Callback Mobile Number *
            </label>
            <input type="tel" id="inc-phone" class="form-input" style="width: 100%; height: 42px; border-radius: var(--radius-card); border: 1px solid var(--hairline); padding: 8px 12px; font-family: inherit; font-size: 13px; background: var(--canvas); color: var(--ink);" placeholder="0917-123-4567" required>
          </div>
        </div>

        <div style="margin-bottom: 18px;">
          <label style="display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; color: var(--ink);" for="inc-details">
            Situation Description & Casualties / Hazards *
          </label>
          <textarea id="inc-details" class="form-input" style="width: 100%; min-height: 72px; border-radius: var(--radius-card); border: 1px solid var(--hairline); padding: 8px 12px; font-family: inherit; font-size: 13px; background: var(--canvas); color: var(--ink); resize: vertical;" placeholder="Describe water depth, number of persons affected, or hazard condition..." required></textarea>
        </div>

        <div id="inc-guidance-box" style="background: rgba(206, 17, 38, 0.05); border-left: 3px solid #CE1126; padding: 10px 14px; border-radius: var(--radius-sm); margin-bottom: 20px; font-size: 12px; color: var(--ink); line-height: 1.45;">
          <strong>Immediate Safety Protocol:</strong>
          <span id="inc-guidance-text">${incidentCategories.flood.guidance}</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--hairline); padding-top: 16px; gap: 10px;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="closeIncidentReporterModal()">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">
            <span>Transmit Incident to OpCen ↗</span>
          </button>
        </div>
      </form>
    `;
  };

  // 5. Update Guidance Text
  window.updateIncidentGuidancePreview = function () {
    const catEl = document.getElementById('inc-category');
    const textEl = document.getElementById('inc-guidance-text');
    if (!catEl || !textEl) return;
    const cat = incidentCategories[catEl.value] || incidentCategories.other;
    textEl.textContent = cat.guidance;
  };

  // 6. Handle Submission
  window.handleIncidentSubmit = function (e) {
    e.preventDefault();

    const catKey = document.getElementById('inc-category')?.value || 'flood';
    const severityRadio = document.querySelector('input[name="inc-severity"]:checked');
    const severity = severityRadio ? severityRadio.value : 'high';
    const brgy = document.getElementById('inc-barangay')?.value || 'Barangay 1 (Poblacion)';
    const landmark = document.getElementById('inc-landmark')?.value.trim() || 'General Location';
    const name = document.getElementById('inc-name')?.value.trim() || 'Anonymous';
    const phone = document.getElementById('inc-phone')?.value.trim() || '';
    const details = document.getElementById('inc-details')?.value.trim() || '';
    const errEl = document.getElementById('incident-form-error');

    // Validation
    if (!name) {
      if (errEl) { errEl.textContent = 'Please enter your reporter name.'; errEl.style.display = 'block'; }
      return;
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      if (errEl) { errEl.textContent = 'Please provide a valid 11-digit callback phone number.'; errEl.style.display = 'block'; }
      return;
    }
    if (!details) {
      if (errEl) { errEl.textContent = 'Please provide situation details for the dispatch team.'; errEl.style.display = 'block'; }
      return;
    }

    const catObj = incidentCategories[catKey] || incidentCategories.other;
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const ticketCode = `MDRRMO-2026-${randNum}`;

    const incidentRecord = {
      ticketCode,
      categoryKey: catKey,
      categoryTitle: catObj.title,
      icon: catObj.icon,
      severity,
      barangay: brgy,
      landmark,
      reporterName: name,
      reporterPhone: phone,
      details,
      unit: catObj.unit,
      guidance: catObj.guidance,
      createdAt: new Date().toISOString(),
      displayTime: 'Just now (PST)',
      status: 'Dispatched'
    };

    // Save to localStorage
    try {
      let list = [];
      const stored = localStorage.getItem('tumauini_incident_reports');
      if (stored) list = JSON.parse(stored);
      list.unshift(incidentRecord);
      if (list.length > 50) list = list.slice(0, 50);
      localStorage.setItem('tumauini_incident_reports', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }

    // Refresh live dispatch table if on mdrrmo.html
    renderDispatchLogs();

    // Render Slip
    renderIncidentSlip(incidentRecord);
  };

  // 7. Render Confirmation Slip
  function renderIncidentSlip(record) {
    const container = document.getElementById('incident-modal-body');
    if (!container) return;

    const severityLabel = record.severity.toUpperCase();

    container.innerHTML = `
      <div class="incident-slip-box" style="background: var(--field); border-radius: var(--radius-card); padding: 20px; border: none; box-shadow: none;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 14px; border-bottom: 1px solid var(--hairline); padding-bottom: 10px;">
          <div style="font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--muted); font-weight: 600;">MDRRMO Operations Center · Rescue 3325</div>
          <div style="font-size: 16px; font-weight: 800; font-family: var(--font-display); color: var(--ink); margin: 2px 0;">EMERGENCY DISPATCH TRANSMISSION SLIP</div>
          <div style="font-size: 11.5px; color: #CE1126; font-weight: 700;">TRANSMITTED TO TUMAUINI RESCUE COMMAND</div>
        </div>

        <!-- Top Row with Ticket -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--hairline); padding-bottom: 12px; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <div>
            <span style="font-size: 11px; text-transform: uppercase; color: var(--muted); font-weight: 600; display: block;">Incident Dispatch Reference</span>
            <div style="font-family: var(--font-display); font-size: 22px; font-weight: 800; color: #CE1126; letter-spacing: 0.04em;">${record.ticketCode}</div>
          </div>
          <div style="text-align: right;">
            <span class="pill-badge pill-badge-red" style="font-size: 11px; font-weight: 700;">DISPATCH QUEUED</span>
            <div style="font-size: 10.5px; color: var(--muted); margin-top: 4px;">Priority: ${severityLabel}</div>
          </div>
        </div>

        <!-- Meta Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 12.5px; margin-bottom: 14px;">
          <div>
            <span style="font-size: 11px; color: var(--muted); text-transform: uppercase; display: block;">HAZARD CATEGORY</span>
            <strong>${record.icon} ${record.categoryTitle}</strong>
          </div>
          <div>
            <span style="font-size: 11px; color: var(--muted); text-transform: uppercase; display: block;">LOCATION</span>
            <strong>${record.barangay} · ${record.landmark}</strong>
          </div>
          <div>
            <span style="font-size: 11px; color: var(--muted); text-transform: uppercase; display: block;">ASSIGNED RESPONDERS</span>
            <strong style="color: #15803D;">${record.unit}</strong>
          </div>
          <div>
            <span style="font-size: 11px; color: var(--muted); text-transform: uppercase; display: block;">REPORTER CONTACT</span>
            <strong>${record.reporterName} (${record.reporterPhone})</strong>
          </div>
        </div>

        <!-- Notes Preview -->
        <div style="background: var(--canvas); border-radius: var(--radius-card); padding: 10px 12px; margin-bottom: 14px; font-size: 12px;">
          <span style="font-size: 11px; color: var(--muted); text-transform: uppercase; display: block; margin-bottom: 2px;">SITUATION DETAILS</span>
          <em>"${record.details}"</em>
        </div>

        <!-- Safety Guidance Box -->
        <div style="background: var(--canvas); border-radius: var(--radius-card); padding: 12px; margin-bottom: 14px; font-size: 12px; border-left: 3px solid #CE1126;">
          <strong style="color: #CE1126;">Critical Safety Protocol for This Hazard:</strong>
          <p style="margin: 4px 0 0 0; color: var(--ink); line-height: 1.45;">${record.guidance}</p>
        </div>

        <!-- Direct Phone Trigger -->
        <div style="background: rgba(206, 17, 38, 0.08); border-radius: var(--radius-card); padding: 12px 14px; display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
          <div style="font-size: 12px; color: var(--ink);">
            <strong>Urgent Life-Threatening Situation?</strong>
            <div style="font-size: 11px; color: var(--muted);">Direct radio & telephone link to Rescue 3325 OpCen.</div>
          </div>
          <a href="tel:0783232004" class="btn btn-primary btn-sm" style="white-space: nowrap; font-size: 12px;">
            <span>Call (078) 323-2004 ↗</span>
          </a>
        </div>
      </div>

      <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <button type="button" class="btn btn-secondary btn-sm" onclick="closeIncidentReporterModal()">Close</button>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button type="button" class="btn btn-secondary btn-sm" onclick="copyIncidentTicket('${record.ticketCode}')">Copy Reference ID</button>
          <button type="button" class="btn btn-secondary btn-sm" onclick="window.print()">Print Slip</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="renderIncidentForm()">Report Another</button>
        </div>
      </div>
    `;
  }

  // 8. Copy Reference ID
  window.copyIncidentTicket = function (ticketCode) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ticketCode).then(() => {
        if (typeof showToast === 'function') {
          showToast(`Incident reference ${ticketCode} copied to clipboard.`);
        } else {
          alert(`Incident reference ${ticketCode} copied to clipboard.`);
        }
      }).catch(() => {
        alert(`Incident reference: ${ticketCode}`);
      });
    } else {
      alert(`Incident reference: ${ticketCode}`);
    }
  };

  // 9. Sync & Render Stored Incidents in Recent Logs Table (mdrrmo.html)
  window.renderDispatchLogs = function () {
    const tbody = document.getElementById('dispatch-tbody');
    if (!tbody) return;

    let storedIncidents = [];
    try {
      const raw = localStorage.getItem('tumauini_incident_reports');
      if (raw) storedIncidents = JSON.parse(raw);
    } catch (e) {
      console.warn(e);
    }

    if (storedIncidents.length === 0) return;

    // Check if we already rendered the user incidents
    const existingDynamic = tbody.querySelectorAll('.dynamic-incident-row');
    existingDynamic.forEach(row => row.remove());

    // Prepend user incidents to top of table
    storedIncidents.slice(0, 5).reverse().forEach(inc => {
      const tr = document.createElement('tr');
      tr.className = 'dynamic-incident-row';
      tr.style.background = 'rgba(206, 17, 38, 0.03)';
      tr.innerHTML = `
        <td>
          <span style="font-weight: 600; color: #CE1126;">Just now</span><br>
          <span style="font-size: 10.5px; color: var(--muted);">${inc.ticketCode}</span>
        </td>
        <td>
          <strong style="color: var(--ink);">${inc.icon} ${inc.categoryTitle}</strong>
        </td>
        <td>
          ${inc.barangay}<br>
          <span style="font-size: 11px; color: var(--muted);">${inc.landmark}</span>
        </td>
        <td style="font-size: 12px;">
          ${inc.unit}
        </td>
        <td>
          <span class="status-badge" style="background: #FEE2E2; color: #991B1B; font-weight: 700;">Dispatched</span>
        </td>
      `;
      tbody.insertBefore(tr, tbody.firstChild);
    });
  };

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function () {
    renderDispatchLogs();

    // Escape listener
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeIncidentReporterModal();
      }
    });

    // Backdrop click listener
    const modal = document.getElementById('incident-reporter-modal');
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          closeIncidentReporterModal();
        }
      });
    }
  });

})();
