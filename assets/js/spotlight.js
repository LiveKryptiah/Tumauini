/**
 * Sangguniang Bayan & Municipal Government of Tumauini
 * Global Instant Civic Spotlight Search Engine (Ctrl + K)
 * Strictly follows GEMINI.md Design System Guidelines.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. COMPREHENSIVE CIVIC INDEX (Services, Barangays, Legislation, Officials, Pages)
  // =========================================================================
  const CIVIC_DATABASE = [
    // --- LIVE INTERACTIVE TOOLS & TRACKING ---
    {
      id: 'tool-agri-hub',
      type: 'service',
      category: 'services',
      title: 'Corn Capital Agri-Hub & Farmers Market',
      desc: 'Daily crop farmgate prices, RSBSA subsidy vouchers, and municipal tractor lending.',
      badge: 'Agri-Hub',
      url: 'agri-hub.html',
      keywords: ['agri', 'corn', 'farmer', 'tractor', 'rsbsa', 'palay', 'subsidy', 'price', 'farmgate', 'fertilizer', 'crops', 'lending', 'equipment', 'agriculture']
    },
    {
      id: 'tool-careers-peso',
      type: 'service',
      category: 'services',
      title: 'PESO Job Portal & LGU Careers',
      desc: 'Browse municipal civil service plantilla vacancies, job orders, and private jobs.',
      badge: 'PESO Portal',
      url: 'careers.html',
      keywords: ['jobs', 'careers', 'peso', 'work', 'hiring', 'plantilla', 'vacancies', 'civil service', 'job order', 'spes', 'employment']
    },
    {
      id: 'tool-permit-tracker',
      type: 'service',
      category: 'services',
      title: 'Citizen Application & Permit Tracker',
      desc: 'Track live status for Business Permits, Civil Registry, and Building Clearances.',
      badge: 'Live Tracker',
      url: 'index.html#tracker',
      keywords: ['track', 'tracker', 'permit tracker', 'status', 'application status', 'check status', 'reference id', 'bplo tracker', 'lcr status']
    },
    // --- CITIZEN CHARTER SERVICES ---
    {
      id: 'srv-bplo-new',
      type: 'service',
      category: 'services',
      title: 'Business Permit & Licensing (New Application)',
      desc: 'Commercial registration, zoning verification, and tax assessment.',
      badge: "Citizen's Charter",
      url: 'services.html#service-business-permit',
      keywords: ['bplo', 'business permit', 'new business', 'mayor permit', 'store', 'registration', 'enterprise', 'commercial']
    },
    {
      id: 'srv-bplo-renew',
      type: 'service',
      category: 'services',
      title: 'Business Permit Renewal',
      desc: 'Annual license renewal, gross receipts assessment, and BPLO clearance.',
      badge: "Citizen's Charter",
      url: 'services.html#service-business-permit',
      keywords: ['renewal', 'bplo renewal', 'annual business tax', 'gross receipts', 'license']
    },
    {
      id: 'srv-civil-birth',
      type: 'service',
      category: 'services',
      title: 'Birth Certificate Registration & Certified Copies',
      desc: 'Timely birth registration, delayed filing, and true copies.',
      badge: 'Civil Registry',
      url: 'services.html#service-civil-registry',
      keywords: ['birth certificate', 'civil registry', 'delayed birth', 'psa', 'lcr', 'records', 'registration']
    },
    {
      id: 'srv-civil-marriage',
      type: 'service',
      category: 'services',
      title: 'Marriage License & Certificate Registration',
      desc: 'Marriage license applications, pre-marriage counseling, and registry.',
      badge: 'Civil Registry',
      url: 'services.html#service-civil-registry',
      keywords: ['marriage license', 'wedding', 'civil wedding', 'marriage certificate', 'pre-marriage counseling', 'lcr']
    },
    {
      id: 'srv-civil-death',
      type: 'service',
      category: 'services',
      title: 'Death Certificate Registration & Burial Permits',
      desc: 'Death registration, burial permits, and cemetery transfers.',
      badge: 'Civil Registry',
      url: 'services.html#service-civil-registry',
      keywords: ['death certificate', 'burial permit', 'cemetery', 'cadaver transfer', 'lcr', 'civil registry']
    },
    {
      id: 'srv-rpt-treasury',
      type: 'service',
      category: 'services',
      title: 'Real Property Tax (RPT / Amilyar) Payment',
      desc: 'Land and building tax assessments, receipts, and clearances.',
      badge: 'Municipal Treasury',
      url: 'services.html#service-real-property-tax',
      keywords: ['amilyar', 'rpt', 'real property tax', 'land tax', 'treasury', 'tax declaration', 'tax clearance']
    },
    {
      id: 'srv-cedula',
      type: 'service',
      category: 'services',
      title: 'Community Tax Certificate (Cedula)',
      desc: 'Individual and corporate community tax assessment slips.',
      badge: 'Municipal Treasury',
      url: 'services.html#service-real-property-tax',
      keywords: ['cedula', 'community tax', 'ctc', 'residence certificate', 'treasury', 'identification']
    },
    {
      id: 'srv-building-permit',
      type: 'service',
      category: 'services',
      title: 'Building & Occupancy Permit Processing',
      desc: 'Architectural structural plan evaluations and building clearances.',
      badge: 'Engineering & OBO',
      url: 'services.html#service-building-permit',
      keywords: ['building permit', 'occupancy permit', 'electrical permit', 'engineering', 'obo', 'construction', 'plans']
    },
    {
      id: 'srv-health-cert',
      type: 'service',
      category: 'services',
      title: 'Sanitary Permit & Food Handler Health Card',
      desc: 'Annual health physical exams, stool exams, and cards.',
      badge: 'Health Office',
      url: 'services.html#service-sanitary-permit',
      keywords: ['health certificate', 'sanitary permit', 'yellow card', 'food handler', 'rhu', 'clinic', 'medical']
    },
    {
      id: 'srv-senior-id',
      type: 'service',
      category: 'services',
      title: 'Senior Citizen ID & Medicine Purchase Booklet',
      desc: 'OSCA identification, 20% discounts, and monthly social pension.',
      badge: 'OSCA / MSWDO',
      url: 'services.html#service-social-welfare',
      keywords: ['senior citizen', 'osca', 'elderly', 'medicine booklet', 'pension', 'discount', 'mswdo']
    },
    {
      id: 'srv-pwd-id',
      type: 'service',
      category: 'services',
      title: 'Persons with Disability (PWD) Identification Card',
      desc: 'PDAO verification, statutory discounts, and welfare assistance.',
      badge: 'PDAO / MSWDO',
      url: 'services.html#service-social-welfare',
      keywords: ['pwd', 'disability', 'pdao', 'special needs', 'mswdo', 'pwd id', 'welfare']
    },
    {
      id: 'srv-aics',
      type: 'service',
      category: 'services',
      title: 'Assistance to Individuals in Crisis Situations (AICS)',
      desc: 'Emergency medical, burial, and transportation cash grants.',
      badge: 'MSWDO',
      url: 'services.html#service-social-welfare',
      keywords: ['aics', 'financial aid', 'burial assistance', 'medical aid', 'crisis', 'indigent', 'mswdo', 'guarantee letter']
    },
    {
      id: 'srv-agri-machinery',
      type: 'service',
      category: 'services',
      title: 'Agricultural Machinery & Post-Harvest Tractor Service',
      desc: 'Subsidized tractor plowing, mobile corn shellers, and dryers.',
      badge: 'Agriculture Office',
      url: 'services.html#service-agriculture',
      keywords: ['agriculture', 'tractor', 'corn sheller', 'mechanical dryer', 'farmers', 'mao', 'crops', 'harvester']
    },
    {
      id: 'srv-agri-seeds',
      type: 'service',
      category: 'services',
      title: 'Certified Seeds & Bio-Fertilizer Subsidies',
      desc: 'High-yield hybrid corn, inbred palay, and organic fertilizer.',
      badge: 'Agriculture Office',
      url: 'services.html#service-agriculture',
      keywords: ['seeds', 'corn seeds', 'palay seeds', 'fertilizer', 'subsidies', 'farmers', 'mao', 'planting']
    },
    {
      id: 'srv-rescue3325',
      type: 'service',
      category: 'services',
      title: 'Rescue 3325 & Emergency Ambulance Dispatch',
      desc: '24/7 medical response, patient transport, and vehicular rescue.',
      badge: 'MDRRMO',
      url: 'mdrrmo.html',
      keywords: ['rescue 3325', 'ambulance', 'emergency', 'mdrrmo', 'hotline', 'hospital', 'trauma', 'accident']
    },
    {
      id: 'srv-police-clearance',
      type: 'service',
      category: 'services',
      title: 'National Police Clearance System (NPCS)',
      desc: 'Biometrics capture, criminal record verification, and clearances.',
      badge: 'PNP Tumauini',
      url: 'services.html#service-police-clearance',
      keywords: ['police clearance', 'pnp', 'npcs', 'criminal record', 'station', 'clearance', 'blotter']
    },
    {
      id: 'srv-tricycle-franchise',
      type: 'service',
      category: 'services',
      title: 'Tricycle Franchising & Motorized Operator Permit (MTOP)',
      desc: 'TODA route assignments, inspection, and fare compliance.',
      badge: 'Traffic Management',
      url: 'services.html#service-tricycle-franchising',
      keywords: ['tricycle', 'mtop', 'franchise', 'toda', 'fare matrix', 'transport', 'driver permit']
    },
    {
      id: 'srv-peso-job',
      type: 'service',
      category: 'services',
      title: 'Public Employment Service Office (PESO Job Portal)',
      desc: 'Job matching, local career fairs, and SPES student grants.',
      badge: 'PESO Desk',
      url: 'services.html#service-peso',
      keywords: ['peso', 'jobs', 'employment', 'spes', 'career', 'hiring', 'work', 'labor']
    },

    // --- LEGISLATIVE ORDINANCES & RESOLUTIONS ---
    {
      id: 'leg-ord-2024-12',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2024-12: Revised Omnibus Revenue Code & Tax Ordinance',
      desc: 'Market fees, gross tax tiers, and regulatory charges.',
      badge: 'Tax & Revenue',
      url: 'ordinances.html#ord-2024-12',
      keywords: ['ord 2024-12', 'tax ordinance', 'revenue code', 'local tax', 'rivera', 'market fees', 'ordinance']
    },
    {
      id: 'leg-ord-2024-09',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2024-09: San Matias Heritage Zone & Aesthetic Preservation',
      desc: 'Facade heights, zoning buffers, and cultural preservation.',
      badge: 'Heritage & Zoning',
      url: 'ordinances.html#ord-2024-09',
      keywords: ['ord 2024-09', 'heritage', 'san matias', 'facade', 'church', 'belfry', 'zoning', 'malana', 'ordinance']
    },
    {
      id: 'leg-ord-2024-06',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2024-06: Integrated Solid Waste Management & Single-Use Plastic Ban',
      desc: 'Mandatory waste segregation and commercial plastic reduction.',
      badge: 'Environment',
      url: 'ordinances.html#ord-2024-06',
      keywords: ['ord 2024-06', 'plastic ban', 'solid waste', 'segregation', 'garbage', 'calimag', 'environment', 'ordinance']
    },
    {
      id: 'leg-ord-2024-03',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2024-03: Disaster Risk Reduction & Riverine Early Warning Protocol',
      desc: 'Pinacanauan river warning sirens and evacuation triggers.',
      badge: 'Public Safety',
      url: 'ordinances.html#ord-2024-03',
      keywords: ['ord 2024-03', 'disaster protocol', 'early warning', 'river gauge', 'pinacanauan', 'allam', 'mdrrmo', 'flood']
    },
    {
      id: 'leg-ord-2023-18',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2023-18: Tumauini Agro-Industrial Investment Incentives Code',
      desc: 'Tax holidays for post-harvest corn and dairy plants.',
      badge: 'Investment',
      url: 'ordinances.html#ord-2023-18',
      keywords: ['ord 2023-18', 'investment incentives', 'tax holiday', 'agro-industrial', 'corn', 'sy', 'ordinance']
    },
    {
      id: 'leg-ord-2023-14',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2023-14: Municipal Health & Sanitation Code',
      desc: 'Food sanitation, medical clearances, and hygiene cards.',
      badge: 'Public Health',
      url: 'ordinances.html#ord-2023-14',
      keywords: ['ord 2023-14', 'health code', 'sanitation', 'food handler', 'pascual', 'ordinance']
    },
    {
      id: 'leg-ord-2023-08',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2023-08: Tricycle Route Franchising & Fare Matrix',
      desc: 'Tricycle route zones, fare matrix, and terminal hubs.',
      badge: 'Transportation',
      url: 'ordinances.html#ord-2023-08',
      keywords: ['ord 2023-08', 'tricycle fare', 'toda fare', 'taguba', 'route franchising', 'transportation', 'ordinance']
    },
    {
      id: 'leg-ord-2022-21',
      type: 'legislation',
      category: 'legislation',
      title: 'Ord. No. 2022-21: Youth Leadership & Tertiary Scholarship Assistance',
      desc: 'Financial grants and allowances for college scholars.',
      badge: 'Youth & Education',
      url: 'ordinances.html#ord-2022-21',
      keywords: ['ord 2022-21', 'scholarship', 'tertiary education', 'college grants', 'sk', 'ramos', 'youth', 'ordinance']
    },
    {
      id: 'leg-res-2024-39',
      type: 'legislation',
      category: 'legislation',
      title: 'Res. No. 2024-39: UNESCO World Heritage Inscription Endorsement',
      desc: 'World heritage nomination dossier and international endorsement.',
      badge: 'Resolution',
      url: 'ordinances.html#res-2024-39',
      keywords: ['res 2024-39', 'unesco', 'world heritage', 'san matias church', 'belfry', 'resolution']
    },
    {
      id: 'leg-res-2024-76',
      type: 'legislation',
      category: 'legislation',
      title: 'Res. No. 2024-76: Solar Irrigation Modernization MOA with NIA',
      desc: 'Solar communal irrigation systems for corn and palay.',
      badge: 'Resolution',
      url: 'ordinances.html#res-2024-76',
      keywords: ['res 2024-76', 'nia moa', 'solar irrigation', 'maramag', 'farmers', 'water pump', 'resolution']
    },

    // --- 46 BARANGAYS DIRECTORY ---
    { id: 'brgy-district1', type: 'barangay', category: 'barangays', title: 'Barangay District 1 (Poblacion)', desc: 'PB: Hon. Juanito S. Pua • Commercial core and heritage plaza.', badge: 'Poblacion Zone', url: 'barangays.html', keywords: ['district 1', 'poblacion', 'juanito pua', 'plaza', 'market'] },
    { id: 'brgy-district2', type: 'barangay', category: 'barangays', title: 'Barangay District 2 (Poblacion)', desc: 'PB: Hon. Mario C. Rivera • Historic San Matias quadrangle.', badge: 'Poblacion Zone', url: 'barangays.html', keywords: ['district 2', 'poblacion', 'mario rivera', 'san matias', 'church'] },
    { id: 'brgy-district3', type: 'barangay', category: 'barangays', title: 'Barangay District 3 (Poblacion)', desc: 'PB: Hon. Rodrigo A. Taguba • Municipal hall complex & civic offices.', badge: 'Poblacion Zone', url: 'barangays.html', keywords: ['district 3', 'poblacion', 'municipal hall', 'rodrigo taguba'] },
    { id: 'brgy-district4', type: 'barangay', category: 'barangays', title: 'Barangay District 4 (Poblacion)', desc: 'PB: Hon. Eduardo L. Calimag • Trade corridor & terminal hub.', badge: 'Poblacion Zone', url: 'barangays.html', keywords: ['district 4', 'poblacion', 'eduardo calimag', 'toda terminal', 'commercial'] },
    { id: 'brgy-annafunan', type: 'barangay', category: 'barangays', title: 'Barangay Annafunan', desc: 'PB: Hon. Danilo G. Maramag • Yellow corn and legumes hub.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['annafunan', 'corn', 'danilo maramag'] },
    { id: 'brgy-antagan1', type: 'barangay', category: 'barangays', title: 'Barangay Antagan I', desc: 'PB: Hon. Vicente B. Gammad • Irrigated palay and corn flatlands.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['antagan 1', 'antagan i', 'vicente gammad', 'palay', 'rice'] },
    { id: 'brgy-antagan2', type: 'barangay', category: 'barangays', title: 'Barangay Antagan II', desc: 'PB: Hon. Nestor B. Allam • Agro-industrial feedgrains center.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['antagan 2', 'antagan ii', 'nestor allam', 'corn'] },
    { id: 'brgy-arcon', type: 'barangay', category: 'barangays', title: 'Barangay Arcon', desc: 'PB: Hon. Roberto M. Ramos • Pinacanauan river basin community.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['arcon', 'pinacanauan river', 'roberto ramos', 'flood telemetry'] },
    { id: 'brgy-balug', type: 'barangay', category: 'barangays', title: 'Barangay Balug', desc: 'PB: Hon. Cristobal T. Pobre • Rainfed corn and tobacco parcels.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['balug', 'cristobal pobre', 'tobacco', 'corn'] },
    { id: 'brgy-banigan', type: 'barangay', category: 'barangays', title: 'Barangay Banigan', desc: 'PB: Hon. Fernando S. Cruz • Cagayan river confluence community.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['banigan', 'cagayan river', 'fernando cruz', 'riverbank'] },
    { id: 'brgy-bantug', type: 'barangay', category: 'barangays', title: 'Barangay Bantug', desc: 'PB: Hon. Wilfredo D. Pascual • Irrigated rice paddies and vegetables.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['bantug', 'wilfredo pascual', 'rice', 'palay'] },
    { id: 'brgy-bayabo-east', type: 'barangay', category: 'barangays', title: 'Barangay Bayabo East', desc: 'PB: Hon. Gregorio C. Malana • Foothill agroforestry and fruit orchards.', badge: 'Foothill & Upland', url: 'barangays.html', keywords: ['bayabo east', 'gregorio malana', 'agroforestry', 'orchards'] },
    { id: 'brgy-caligayan', type: 'barangay', category: 'barangays', title: 'Barangay Caligayan', desc: 'PB: Hon. Alberto F. Taguba • High-yield hybrid yellow corn parcels.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['caligayan', 'alberto taguba', 'yellow corn'] },
    { id: 'brgy-camasi', type: 'barangay', category: 'barangays', title: 'Barangay Camasi', desc: 'PB: Hon. Dominador P. Rivera • Riverbank farmlands along Pinacanauan.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['camasi', 'dominador rivera', 'pinacanauan'] },
    { id: 'brgy-camp-samal', type: 'barangay', category: 'barangays', title: 'Barangay Camp Samal', desc: 'PB: Hon. Rolando E. Sy • Historic military encampment site and cornfields.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['camp samal', 'rolando sy', 'historical camp', 'corn'] },
    { id: 'brgy-compania', type: 'barangay', category: 'barangays', title: 'Barangay Compania', desc: 'PB: Hon. Ernesto M. Calimag • Heritage tobacco trading estate.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['compania', 'ernesto calimag', 'tobacco estate', 'tabacalera'] },
    { id: 'brgy-cumabao', type: 'barangay', category: 'barangays', title: 'Barangay Cumabao', desc: 'PB: Hon. Jaime L. Allam • Pinacanauan river agricultural plain.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['cumabao', 'jaime allam', 'riverine', 'corn'] },
    { id: 'brgy-fermeldy', type: 'barangay', category: 'barangays', title: 'Barangay Fermeldy', desc: 'PB: Hon. Reynaldo V. Pua • Commercial bypass junction and residential zone.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['fermeldy', 'reynaldo pua', 'bypass', 'highway'] },
    { id: 'brgy-fugu', type: 'barangay', category: 'barangays', title: 'Barangay Fugu', desc: 'PB: Hon. Arsenio B. Gammad • Cagayan river island fertile silt alluvial soil.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['fugu', 'cagayan river', 'arsenio gammad', 'alluvial'] },
    { id: 'brgy-lalauanan', type: 'barangay', category: 'barangays', title: 'Barangay Lalauanan', desc: 'PB: Hon. Ricardo C. Ramos • Hybrid corn and poultry contract farms.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['lalauanan', 'ricardo ramos', 'poultry', 'corn'] },
    { id: 'brgy-lanna', type: 'barangay', category: 'barangays', title: 'Barangay Lanna', desc: 'PB: Hon. Antonio M. Pobre • Extensive irrigated palay and solar pumps.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['lanna', 'antonio pobre', 'irrigation', 'palay'] },
    { id: 'brgy-lapogan', type: 'barangay', category: 'barangays', title: 'Barangay Lapogan', desc: 'PB: Hon. Marcelino S. Rivera • Cagayan river basin farming and fishing.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['lapogan', 'marcelino rivera', 'cagayan river', 'fisheries'] },
    { id: 'brgy-lingaling', type: 'barangay', category: 'barangays', title: 'Barangay Lingaling', desc: 'PB: Hon. Teodoro F. Calimag • Eastern Sierra Madre foothills agroforestry.', badge: 'Foothill & Upland', url: 'barangays.html', keywords: ['lingaling', 'teodoro calimag', 'sierra madre', 'upland'] },
    { id: 'brgy-liwanag', type: 'barangay', category: 'barangays', title: 'Barangay Liwanag', desc: 'PB: Hon. Bonifacio D. Allam • Community health center and corn grains.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['liwanag', 'bonifacio allam', 'corn', 'grains'] },
    { id: 'brgy-malamag-east', type: 'barangay', category: 'barangays', title: 'Barangay Malamag East', desc: 'PB: Hon. Ramon T. Malana • Grain drying patios and rice processing mills.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['malamag east', 'ramon malana', 'rice mill', 'drying'] },
    { id: 'brgy-malamag-west', type: 'barangay', category: 'barangays', title: 'Barangay Malamag West', desc: 'PB: Hon. Salvador B. Sy • High-density grains storage warehousing.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['malamag west', 'salvador sy', 'warehousing', 'corn'] },
    { id: 'brgy-maligaya', type: 'barangay', category: 'barangays', title: 'Barangay Maligaya', desc: 'PB: Hon. Victorino E. Pua • Lowland rice farming agrarian community.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['maligaya', 'victorino pua', 'rice', 'agrarian'] },
    { id: 'brgy-minanga', type: 'barangay', category: 'barangays', title: 'Barangay Minanga', desc: 'PB: Hon. Bernardo L. Ramos • River mouth junction along Pinacanauan.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['minanga', 'bernardo ramos', 'pinacanauan', 'river mouth'] },
    { id: 'brgy-moldero', type: 'barangay', category: 'barangays', title: 'Barangay Moldero', desc: 'PB: Hon. Gregorio P. Taguba • Agrarian reform community and irrigation.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['moldero', 'gregorio taguba', 'arc', 'irrigation'] },
    { id: 'brgy-pangal-sur', type: 'barangay', category: 'barangays', title: 'Barangay Pangal Sur', desc: 'PB: Hon. Alfredo S. Gammad • National Highway junction and commercial strip.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['pangal sur', 'alfredo gammad', 'highway', 'junction'] },
    { id: 'brgy-parang', type: 'barangay', category: 'barangays', title: 'Barangay Parang', desc: 'PB: Hon. Cesar T. Rivera • Scenic pasturelands and cattle livestock.', badge: 'Foothill & Upland', url: 'barangays.html', keywords: ['parang', 'cesar rivera', 'livestock', 'cattle', 'pasture'] },
    { id: 'brgy-san-mateo', type: 'barangay', category: 'barangays', title: 'Barangay San Mateo', desc: 'PB: Hon. Rogelio C. Pascual • Irrigated rice paddies and vegetable crops.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['san mateo', 'rogelio pascual', 'rice', 'vegetables'] },
    { id: 'brgy-san-pedro', type: 'barangay', category: 'barangays', title: 'Barangay San Pedro', desc: 'PB: Hon. Emilio F. Calimag • Cagayan river dike community and farming.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['san pedro', 'emilio calimag', 'cagayan river', 'dike'] },
    { id: 'brgy-san-vicente', type: 'barangay', category: 'barangays', title: 'Barangay San Vicente', desc: 'PB: Hon. Nelson M. Allam • High-yield corn production and tractors.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['san vicente', 'nelson allam', 'corn', 'tractors'] },
    { id: 'brgy-santa', type: 'barangay', category: 'barangays', title: 'Barangay Santa', desc: 'PB: Hon. Arturo D. Malana • Pinacanauan river eco-tourism zone.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['santa', 'arturo malana', 'eco-tourism', 'pinacanauan'] },
    { id: 'brgy-santa-catalina', type: 'barangay', category: 'barangays', title: 'Barangay Santa Catalina', desc: 'PB: Hon. Gil B. Pobre • Agro-forestry and Sierra Madre headwaters.', badge: 'Foothill & Upland', url: 'barangays.html', keywords: ['santa catalina', 'gil pobre', 'headwaters', 'sierra madre'] },
    { id: 'brgy-santa-visitacion', type: 'barangay', category: 'barangays', title: 'Barangay Santa Visitacion', desc: 'PB: Hon. Danilo E. Ramos • Corn, legumes, and goat raising farms.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['santa visitacion', 'danilo ramos', 'corn', 'goat'] },
    { id: 'brgy-santo-nino', type: 'barangay', category: 'barangays', title: 'Barangay Santo Niño', desc: 'PB: Hon. Romeo S. Sy • Organic agriculture and solar powered pump.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['santo nino', 'romeo sy', 'organic farming', 'solar pump'] },
    { id: 'brgy-sinippil', type: 'barangay', category: 'barangays', title: 'Barangay Sinippil', desc: 'PB: Hon. Rodolfo C. Pua • Cagayan river fishing and corn siltation flats.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['sinippil', 'rodolfo pua', 'cagayan river', 'fisheries'] },
    { id: 'brgy-sisimon', type: 'barangay', category: 'barangays', title: 'Barangay Sisimon', desc: 'PB: Hon. Mario T. Rivera • Upland corn farming and watershed buffer.', badge: 'Foothill & Upland', url: 'barangays.html', keywords: ['sisimon', 'mario rivera', 'watershed', 'corn'] },
    { id: 'brgy-tunggui', type: 'barangay', category: 'barangays', title: 'Barangay Tunggui', desc: 'PB: Hon. Wilfredo L. Calimag • Cagayan river bank corn and water transport.', badge: 'Riverine Zone', url: 'barangays.html', keywords: ['tunggui', 'wilfredo calimag', 'cagayan river', 'banca'] },
    { id: 'brgy-ugac-norte', type: 'barangay', category: 'barangays', title: 'Barangay Ugac Norte', desc: 'PB: Hon. Angelito M. Taguba • Agrarian rice parcels and cattle dairy.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['ugac norte', 'angelito taguba', 'rice', 'dairy'] },
    { id: 'brgy-ugac-sur', type: 'barangay', category: 'barangays', title: 'Barangay Ugac Sur', desc: 'PB: Hon. Manuel F. Allam • Irrigated grainfields and farmer associations.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['ugac sur', 'manuel allam', 'irrigators', 'grain'] },
    { id: 'brgy-villa-cruz', type: 'barangay', category: 'barangays', title: 'Barangay Villa Cruz', desc: 'PB: Hon. Felix B. Malana • Modern solar dryers and grain warehousing.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['villa cruz', 'felix malana', 'solar dryer', 'warehouses'] },
    { id: 'brgy-villa-pereda', type: 'barangay', category: 'barangays', title: 'Barangay Villa Pereda', desc: 'PB: Hon. Oscar P. Rivera • Eastern foothill mango and citrus plantations.', badge: 'Foothill & Upland', url: 'barangays.html', keywords: ['villa pereda', 'oscar rivera', 'citrus', 'mango', 'orchard'] },
    { id: 'brgy-villa-rey', type: 'barangay', category: 'barangays', title: 'Barangay Villa Rey', desc: 'PB: Hon. Jaime C. Gammad • Corn grain drying and agrarian reform community.', badge: 'Agricultural Lowland', url: 'barangays.html', keywords: ['villa rey', 'jaime gammad', 'corn drying', 'arc'] },

    // --- MUNICIPAL OFFICIALS & LEADERSHIP ---
    {
      id: 'off-mayor',
      type: 'official',
      category: 'officials',
      title: 'Hon. Venus T. Bautista — Municipal Mayor',
      desc: 'Chief Executive Officer of the Municipal Government of Tumauini.',
      badge: 'Executive',
      url: 'elected-officials.html',
      keywords: ['mayor', 'venus bautista', 'municipal mayor', 'executive', 'alkalde']
    },
    {
      id: 'off-vicemayor',
      type: 'official',
      category: 'officials',
      title: 'Hon. Christopher B. Uy — Municipal Vice Mayor',
      desc: 'Presiding Officer of the 11th Sangguniang Bayan of Tumauini.',
      badge: 'Legislative',
      url: 'elected-officials.html',
      keywords: ['vice mayor', 'christopher uy', 'presiding officer', 'sangguniang bayan', 'sb']
    },
    {
      id: 'off-sb-rivera',
      type: 'official',
      category: 'officials',
      title: 'Hon. Mark Lester P. Rivera — Municipal Councilor',
      desc: 'Chairman: Committee on Appropriations, Budget & Finance.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['mark lester rivera', 'budget', 'appropriations', 'finance', 'councilor', 'sb member']
    },
    {
      id: 'off-sb-calimag',
      type: 'official',
      category: 'officials',
      title: 'Hon. Elena S. Calimag — Municipal Councilor',
      desc: 'Chairwoman: Committee on Rules, Laws, Ordinances & Ethics.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['elena calimag', 'rules', 'ordinances', 'ethics', 'laws', 'councilor']
    },
    {
      id: 'off-sb-maramag',
      type: 'official',
      category: 'officials',
      title: 'Hon. Danilo G. Maramag — Municipal Councilor',
      desc: 'Chairman: Committee on Agriculture, Fisheries & Food Security.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['danilo maramag', 'agriculture', 'food security', 'fisheries', 'farming', 'councilor']
    },
    {
      id: 'off-sb-pascual',
      type: 'official',
      category: 'officials',
      title: 'Hon. Dr. Grace M. Pascual — Municipal Councilor',
      desc: 'Chairwoman: Committee on Health, Sanitation & Social Welfare.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['grace pascual', 'doctor', 'health', 'social welfare', 'sanitation', 'councilor']
    },
    {
      id: 'off-sb-taguba',
      type: 'official',
      category: 'officials',
      title: 'Hon. Rodrigo F. Taguba — Municipal Councilor',
      desc: 'Chairman: Committee on Public Works, Infrastructure & Utilities.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['rodrigo taguba', 'public works', 'infrastructure', 'roads', 'councilor']
    },
    {
      id: 'off-sb-malana',
      type: 'official',
      category: 'officials',
      title: 'Hon. Corazon L. Malana — Municipal Councilor',
      desc: 'Chairwoman: Committee on Education, Culture, Heritage & Arts.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['corazon malana', 'education', 'heritage', 'san matias', 'culture', 'scholarships', 'councilor']
    },
    {
      id: 'off-sb-allam',
      type: 'official',
      category: 'officials',
      title: 'Hon. Ramon V. Allam — Municipal Councilor',
      desc: 'Chairman: Committee on Peace & Order, Public Safety & DRRM.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['ramon allam', 'peace and order', 'public safety', 'drrm', 'rescue 3325', 'councilor']
    },
    {
      id: 'off-sb-sy',
      type: 'official',
      category: 'officials',
      title: 'Hon. Jerry K. Sy — Municipal Councilor',
      desc: 'Chairman: Committee on Trade, Commerce, Industry & Tourism.',
      badge: 'Councilor',
      url: 'elected-officials.html',
      keywords: ['jerry sy', 'trade', 'commerce', 'business', 'tourism', 'industry', 'councilor']
    },
    {
      id: 'off-sb-gammad',
      type: 'official',
      category: 'officials',
      title: 'Hon. Vicente B. Gammad — LNB / ABC President',
      desc: 'Ex-Officio Councilor representing all 46 Punong Barangays.',
      badge: 'Ex-Officio',
      url: 'elected-officials.html',
      keywords: ['vicente gammad', 'liga ng mga barangay', 'lnb', 'abc president', '46 barangays']
    },
    {
      id: 'off-sb-ramos',
      type: 'official',
      category: 'officials',
      title: 'Hon. Althea Joy C. Ramos — SK Federation President',
      desc: 'Ex-Officio Councilor championing youth leadership & sports.',
      badge: 'Ex-Officio',
      url: 'elected-officials.html',
      keywords: ['althea joy ramos', 'sk president', 'sangguniang kabataan', 'youth', 'sports']
    },
    {
      id: 'dept-mpdc',
      type: 'official',
      category: 'officials',
      title: 'Engr. Arnold C. Taguba — MPDC (Planning Coordinator)',
      desc: 'Municipal Planning and Development Coordinator.',
      badge: 'Department Head',
      url: 'department-heads.html',
      keywords: ['mpdc', 'mpdo', 'planning', 'zoning', 'arnold taguba', 'development']
    },
    {
      id: 'dept-treasurer',
      type: 'official',
      category: 'officials',
      title: 'Ms. Carmencita S. Rivera — Municipal Treasurer',
      desc: 'Municipal Treasury Office, real property tax, and civic collections.',
      badge: 'Department Head',
      url: 'department-heads.html',
      keywords: ['treasurer', 'carmencita rivera', 'treasury', 'tax', 'collections', 'amilyar']
    },
    {
      id: 'dept-mho',
      type: 'official',
      category: 'officials',
      title: 'Dr. Maria Teresa P. Calimag — Municipal Health Officer',
      desc: 'Rural Health Unit (RHU), primary care, and sanitation permits.',
      badge: 'Department Head',
      url: 'department-heads.html',
      keywords: ['mho', 'rhu', 'health officer', 'doctor', 'maria teresa calimag', 'clinic']
    },
    {
      id: 'dept-mswdo',
      type: 'official',
      category: 'officials',
      title: 'Ms. Rosario V. Malana — Municipal Social Welfare Officer',
      desc: 'MSWDO, AICS crisis aid, senior citizens, and PWD programs.',
      badge: 'Department Head',
      url: 'department-heads.html',
      keywords: ['mswdo', 'social welfare', 'rosario malana', 'aics', 'senior', 'pwd', 'relief']
    },
    {
      id: 'dept-engineer',
      type: 'official',
      category: 'officials',
      title: 'Engr. Ferdinand S. Pua — Municipal Engineer',
      desc: 'Municipal Engineering Office & Building Official (OBO).',
      badge: 'Department Head',
      url: 'department-heads.html',
      keywords: ['engineer', 'ferdinand pua', 'obo', 'building official', 'infrastructure', 'permits']
    },
    {
      id: 'dept-mdrrmo',
      type: 'official',
      category: 'officials',
      title: 'Mr. Roderick T. Allam — MDRRM Officer',
      desc: 'Disaster risk management, flood telemetry, and Rescue 3325 dispatch.',
      badge: 'Department Head',
      url: 'department-heads.html',
      keywords: ['mdrrmo', 'roderick allam', 'rescue 3325', 'disaster', 'flood', 'evacuation']
    },

    // --- KEY CIVIC WEBPAGES & PORTALS ---
    {
      id: 'page-home',
      type: 'page',
      category: 'pages',
      title: 'Tumauini Official Portal Homepage',
      desc: 'Executive welcome, civic quick links, emergency hotlines, and news.',
      badge: 'Portal',
      url: 'index.html',
      keywords: ['home', 'homepage', 'index', 'main', 'tumauini', 'isabela']
    },
    {
      id: 'page-services',
      type: 'page',
      category: 'pages',
      title: "Citizen's Charter & Public Services Directory",
      desc: 'Full directory of 18 municipal services with fees and steps.',
      badge: 'Portal',
      url: 'services.html',
      keywords: ['citizens charter', 'services', 'bplo', 'civil registry', 'fees', 'forms', 'arta']
    },
    {
      id: 'page-barangays',
      type: 'page',
      category: 'pages',
      title: '46 Barangays Official Directory',
      desc: 'Grassroots leaders, captains, SK chairs, and community profiles.',
      badge: 'Portal',
      url: 'barangays.html',
      keywords: ['barangays', '46 barangays', 'punong barangay', 'sk chair', 'directory', 'zones']
    },
    {
      id: 'page-ordinances',
      type: 'page',
      category: 'pages',
      title: 'Sangguniang Bayan Ordinances & Resolutions Archive',
      desc: 'Searchable database of municipal laws, tax codes, and sessions.',
      badge: 'Portal',
      url: 'ordinances.html',
      keywords: ['ordinances', 'resolutions', 'sangguniang bayan', 'laws', 'legislation', 'codes']
    },
    {
      id: 'page-tourism',
      type: 'page',
      category: 'pages',
      title: 'Tourism & Cultural Heritage Portal',
      desc: 'San Matias Church, cylindrical belfry, ecotourism, and culinary trail.',
      badge: 'Portal',
      url: 'tourism.html',
      keywords: ['tourism', 'heritage', 'san matias church', 'belfry', 'pinacanauan river', 'culture']
    },
    {
      id: 'page-smart-city',
      type: 'page',
      category: 'pages',
      title: 'Smart & Sustainable City Dashboard',
      desc: 'Live telemetry, river gauges, solar energy, and municipal Wi-Fi.',
      badge: 'Portal',
      url: 'smart-city.html',
      keywords: ['smart city', 'telemetry', 'sensors', 'river gauge', 'wi-fi', 'solar']
    },
    {
      id: 'page-bids',
      type: 'page',
      category: 'pages',
      title: 'Bids & Awards Committee (BAC) Transparency Hub',
      desc: 'Procurement notices, invitations to bid, and awards postings.',
      badge: 'Portal',
      url: 'bids-and-awards.html',
      keywords: ['bids', 'awards', 'bac', 'procurement', 'philgeps', 'invitation to bid']
    },
    {
      id: 'page-fund',
      type: 'page',
      category: 'pages',
      title: 'Fund Utilization & Financial Disclosure (FDP)',
      desc: 'Form 74-A, 20% development fund, and COA annual audit reports.',
      badge: 'Portal',
      url: 'fund-utilization.html',
      keywords: ['fund utilization', 'fdp', 'coa', 'budget', 'financial reports', 'audit']
    },
    {
      id: 'page-news',
      type: 'page',
      category: 'pages',
      title: 'Municipal News, Advisories & Announcements',
      desc: 'Official bulletins, weather alerts, and cultural fiesta updates.',
      badge: 'Portal',
      url: 'news.html',
      keywords: ['news', 'bulletin', 'announcement', 'advisory', 'updates', 'press']
    },
    {
      id: 'page-history',
      type: 'page',
      category: 'pages',
      title: 'Historical Background of Tumauini (Founded 1707)',
      desc: 'Dominican heritage, San Matias construction, and cultural legacy.',
      badge: 'Heritage',
      url: 'historical-background.html',
      keywords: ['history', '1707', 'dominican', 'historical background', 'san matias', 'heritage']
    },
    {
      id: 'page-profile',
      type: 'page',
      category: 'pages',
      title: 'Municipal Profile, Demographics & Territory',
      desc: '347.30 sq km land area, 70,743 population, and agro-economy.',
      badge: 'About Us',
      url: 'municipal-profile.html',
      keywords: ['municipal profile', 'land area', 'demographics', 'population', 'geography']
    },
    {
      id: 'page-mdrrmo',
      type: 'page',
      category: 'pages',
      title: 'MDRRMO Disaster Telemetry & River Basin Flood Monitoring Hub',
      desc: 'Live Cagayan & Pinacanauan water level gauges, early warning alerts, and Rescue 3325 dispatch.',
      badge: 'Disaster & Safety',
      url: 'mdrrmo.html',
      keywords: ['mdrrmo', 'disaster', 'flood', 'river level', 'water level', 'rescue 3325', 'evacuation', 'typhoon', 'alert', 'pinacanauan', 'cagayan river', 'emergency']
    },
    {
      id: 'srv-rescue-3325',
      type: 'service',
      category: 'services',
      title: 'Rescue 3325 Emergency Dispatch & Ambulance Assistance',
      desc: '24/7 municipal emergency medical services, rescue operations, and typhoon response.',
      badge: 'Emergency Service',
      url: 'mdrrmo.html',
      keywords: ['rescue 3325', 'ambulance', 'emergency dispatch', 'hotline', 'rescue', 'paramedic', 'first aid', 'mdrrmo']
    },
    {
      id: 'srv-river-telemetry',
      type: 'service',
      category: 'services',
      title: 'Tumauini River Basin Water Level Early Warning System',
      desc: 'Real-time ultrasonic hydrological telemetry across Cagayan and Pinacanauan rivers.',
      badge: 'Disaster Telemetry',
      url: 'mdrrmo.html#gauges-section-title',
      keywords: ['river gauges', 'flood warning', 'water level', 'cagayan river', 'pinacanauan', 'alert levels', 'ultrasonic', 'mdrrmo']
    },
    {
      id: 'srv-evacuation-shelters',
      type: 'service',
      category: 'services',
      title: 'Designated Municipal Evacuation Centers & Shelters',
      desc: 'Engineered disaster facilities with backup power, potable water, and medical bays.',
      badge: 'Evacuation Center',
      url: 'mdrrmo.html#evacuation-centers',
      keywords: ['evacuation center', 'shelters', 'cultural center', 'calamity shelter', 'lanna', 'santa nhs', 'mdrrmo']
    },
    {
      id: 'page-tax-calculator',
      type: 'page',
      category: 'pages',
      title: 'BPLO Business Tax & Regulatory Fee Calculator',
      desc: 'Estimate Mayor’s Permit, Local Business Tax, sanitary, garbage, and fire inspection dues.',
      badge: 'BPLO Calculator',
      url: 'tax-calculator.html',
      keywords: ['tax calculator', 'bplo', 'business tax', 'mayors permit', 'fee calculator', 'gross sales', 'capital', 'sanitary permit', 'garbage fee', 'fire safety', 'bmbe']
    },
    {
      id: 'srv-tax-calculator',
      type: 'service',
      category: 'services',
      title: 'Interactive Municipal Business Permit Fee Estimator',
      desc: 'Simulate annual and quarterly regulatory assessments based on business line and gross scale.',
      badge: 'Online Estimator',
      url: 'tax-calculator.html#calc-workbench-heading',
      keywords: ['tax calculator', 'business permit estimation', 'bplo assessment', 'boss renewal', 'business tax rate', 'quarterly dues', 'fees']
    },
    {
      id: 'page-map',
      type: 'page',
      category: 'pages',
      title: 'Interactive GIS Map & Evacuation Zones',
      desc: 'Cartographic map of all 46 barangays, evacuation centers, flood hazard zones, and landmarks.',
      badge: 'GIS Map',
      url: 'map.html',
      keywords: ['map', 'gis', 'barangay map', 'evacuation map', 'flood hazard', 'cagayan river', 'pinacanauan', 'landmarks', 'territory', 'routes']
    },
    {
      id: 'srv-map-evac',
      type: 'service',
      category: 'services',
      title: 'Barangay Evacuation Route & Shelter Finder',
      desc: 'Interactive geographic routing to assigned municipal disaster shelters across Tumauini.',
      badge: 'Disaster Map',
      url: 'map.html#shelter-section-title',
      keywords: ['evacuation route', 'nearest shelter', 'disaster map', 'flood map', 'safe zone', 'shelter capacity']
    }
  ];

  // =========================================================================
  // 2. CSS STYLING INJECTION (Strictly Conforming to GEMINI.md)
  // =========================================================================
  const SPOTLIGHT_CSS = `
    /* Spotlight Scrim */
    .spotlight-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(14, 14, 14, 0.55);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 99999;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: clamp(16px, 8vh, 80px) 16px 24px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s ease;
    }

    .spotlight-backdrop.open {
      opacity: 1;
      visibility: visible;
    }

    /* Modal Container */
    .spotlight-modal {
      width: 100%;
      max-width: 660px;
      background: var(--soft-canvas, #FFFFFF);
      border: 1px solid var(--hairline, #E0E0E0);
      border-radius: 20px;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25), 0 4px 16px rgba(0, 0, 0, 0.08);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transform: scale(0.96) translateY(-8px);
      transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      color: var(--ink, #141414);
    }

    .spotlight-backdrop.open .spotlight-modal {
      transform: scale(1) translateY(0);
    }

    /* Search Input Bar */
    .spotlight-input-wrap {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-bottom: 1px solid var(--hairline, #EAEAEA);
      background: var(--soft-canvas, #FFFFFF);
    }

    .spotlight-search-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spotlight-search-icon svg {
      stroke: url(#icon-green-yellow) !important;
    }

    .spotlight-input {
      flex: 1;
      border: none;
      outline: none;
      font-family: inherit;
      font-size: 16px;
      font-weight: 500;
      color: var(--ink, #141414);
      background: transparent;
    }

    .spotlight-input::placeholder {
      color: var(--muted, #8C8C8C);
      font-weight: 400;
    }

    .spotlight-esc-pill {
      font-family: inherit;
      font-size: 11px;
      font-weight: 600;
      padding: 3px 8px;
      border-radius: 6px;
      background: var(--field, #F0F0F0);
      color: var(--muted, #707070);
      border: 1px solid var(--hairline, #E0E0E0);
      cursor: pointer;
      user-select: none;
      transition: all 0.15s ease;
    }

    .spotlight-esc-pill:hover {
      background: var(--hairline, #E4E4E4);
      color: var(--ink, #141414);
    }

    /* Category Filter Strip */
    .spotlight-filter-bar {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 18px;
      background: var(--field, #FAFAFA);
      border-bottom: 1px solid var(--hairline, #EAEAEA);
      overflow-x: auto;
      scrollbar-width: none;
    }

    .spotlight-filter-bar::-webkit-scrollbar {
      display: none;
    }

    .spotlight-tab-btn {
      border: 1px solid var(--hairline, #E0E0E0);
      border-radius: 9999px;
      background: var(--soft-canvas, #FFFFFF);
      color: var(--muted, #707070);
      padding: 4px 12px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
      font-family: inherit;
    }

    .spotlight-tab-btn:hover {
      color: var(--ink, #141414);
      background: var(--field, #F0F0F0);
    }

    .spotlight-tab-btn.active {
      background: #15803D;
      background: radial-gradient(ellipse 75px 36px at 100% 100%, #FCD116 0%, #EAB308 28%, #16A34A 62%, transparent 100%), #15803D;
      color: #FFFFFF;
      border-color: transparent;
      font-weight: 600;
    }

    /* Results List */
    .spotlight-results {
      max-height: 52vh;
      overflow-y: auto;
      padding: 8px 10px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      scrollbar-width: thin;
      scrollbar-color: var(--hairline, #D4D4D4) transparent;
    }

    .spotlight-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 10px 14px;
      border-radius: 12px;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      transition: background 0.12s ease, transform 0.12s ease;
    }

    .spotlight-item:hover,
    .spotlight-item.is-selected {
      background: var(--field, #F0F0F0);
      outline: none;
    }

    .spotlight-item-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .spotlight-item-icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      background: transparent !important;
      border: none !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spotlight-item-icon svg {
      stroke: url(#icon-green-yellow) !important;
    }

    .spotlight-item-content {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .spotlight-item-title {
      font-family: 'Hanken Grotesk', -apple-system, sans-serif;
      font-size: 14.5px;
      font-weight: 600;
      color: var(--ink, #141414);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.25;
    }

    /* Rule 5: ultra-concise descriptions */
    .spotlight-item-desc {
      font-size: 12px;
      color: var(--muted, #707070);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 2px;
    }

    .spotlight-item-right {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .spotlight-badge {
      font-size: 11px;
      font-weight: 600;
      color: var(--primary, #15803D);
      background: var(--field, rgba(21, 128, 61, 0.08));
      border: 1px solid var(--hairline, rgba(21, 128, 61, 0.16));
      padding: 2px 8px;
      border-radius: 9999px;
      white-space: nowrap;
    }

    .spotlight-item-arrow {
      color: var(--muted, #A0A0A0);
      opacity: 0;
      transition: opacity 0.15s ease, transform 0.15s ease;
    }

    .spotlight-item:hover .spotlight-item-arrow,
    .spotlight-item.is-selected .spotlight-item-arrow {
      opacity: 1;
      transform: translateX(2px);
    }

    /* Zero Results Box */
    .spotlight-zero-state {
      padding: 48px 24px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .spotlight-zero-title {
      font-family: 'Hanken Grotesk', sans-serif;
      font-size: 16px;
      font-weight: 700;
      color: var(--ink, #141414);
      margin-top: 8px;
    }

    .spotlight-zero-sub {
      font-size: 13px;
      color: var(--muted, #707070);
      margin-top: 4px;
      max-width: 380px;
    }

    /* Helper Footer */
    .spotlight-footer {
      padding: 10px 18px;
      background: var(--field, #FAFAFA);
      border-top: 1px solid var(--hairline, #EAEAEA);
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11.5px;
      color: var(--muted, #707070);
    }

    .spotlight-footer-keys {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .spotlight-footer kbd {
      font-family: inherit;
      font-size: 10px;
      font-weight: 700;
      background: var(--soft-canvas, #FFFFFF);
      border: 1px solid var(--hairline, #D0D0D0);
      padding: 2px 5px;
      border-radius: 4px;
      color: var(--ink, #404040);
    }

    /* Matching Highlight */
    .spotlight-match {
      color: var(--primary, #15803D);
      font-weight: 700;
      background: rgba(77, 194, 79, 0.18);
      border-radius: 2px;
      padding: 0 1px;
    }

    /* Navbar Trigger Button */
    .nav-spotlight-btn {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 6px 12px;
      background: rgba(20, 20, 20, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 9999px;
      font-family: inherit;
      font-size: 12.5px;
      font-weight: 500;
      color: #707070;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .nav-spotlight-btn:hover {
      background: rgba(21, 128, 61, 0.08);
      border-color: rgba(21, 128, 61, 0.25);
      color: #15803D;
      transform: translateY(-1px);
    }

    .nav-spotlight-btn kbd {
      font-size: 10px;
      font-weight: 700;
      background: #FFFFFF;
      border: 1px solid #D4D4D4;
      padding: 1px 5px;
      border-radius: 4px;
      color: #555555;
    }

    @media (max-width: 768px) {
      .spotlight-footer-keys span:not(:first-child) {
        display: none;
      }
      .nav-spotlight-btn span,
      .nav-spotlight-btn kbd {
        display: none;
      }
      .nav-spotlight-btn {
        padding: 8px;
      }
    }
  `;

  // =========================================================================
  // 3. ICON BUILDER (Stroke-free with #icon-green-yellow gradient)
  // =========================================================================
  function getIconSvg(type) {
    switch (type) {
      case 'service':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;
      case 'barangay':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
      case 'legislation':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`;
      case 'official':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
      case 'page':
      default:
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`;
    }
  }

  // =========================================================================
  // 4. DOM INJECTION & SETUP
  // =========================================================================
  let spotlightBackdrop = null;
  let spotlightInput = null;
  let spotlightResults = null;
  let currentCategory = 'all';
  let selectedIndex = 0;
  let filteredItems = [];

  function injectSpotlightDOM() {
    // 1. Inject Stylesheet
    const styleEl = document.createElement('style');
    styleEl.textContent = SPOTLIGHT_CSS;
    document.head.appendChild(styleEl);

    // 2. Ensure SVG Gradient is defined on the page
    if (!document.getElementById('icon-green-yellow')) {
      const svgDefs = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgDefs.setAttribute('width', '0');
      svgDefs.setAttribute('height', '0');
      svgDefs.style.position = 'absolute';
      svgDefs.style.overflow = 'hidden';
      svgDefs.setAttribute('aria-hidden', 'true');
      svgDefs.innerHTML = `
        <defs>
          <linearGradient id="icon-green-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#15803D" />
            <stop offset="35%" stop-color="#16A34A" />
            <stop offset="80%" stop-color="#EAB308" />
            <stop offset="100%" stop-color="#FCD116" />
          </linearGradient>
        </defs>
      `;
      document.body.appendChild(svgDefs);
    }

    // 3. Inject Modal Structure
    const backdrop = document.createElement('div');
    backdrop.id = 'civic-spotlight-backdrop';
    backdrop.className = 'spotlight-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    backdrop.setAttribute('aria-label', 'Global Civic Spotlight Search');

    backdrop.innerHTML = `
      <div class="spotlight-modal" onclick="event.stopPropagation()">
        
        <!-- Search Input Bar -->
        <div class="spotlight-input-wrap">
          <div class="spotlight-search-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input type="text" id="civic-spotlight-input" class="spotlight-input" placeholder="Search charter services, 46 barangays, ordinances, officials..." autocomplete="off" spellcheck="false">
          <span class="spotlight-esc-pill" id="spotlight-close-btn" title="Press Escape to close">ESC</span>
        </div>

        <!-- Category Filter Strip -->
        <div class="spotlight-filter-bar">
          <button class="spotlight-tab-btn active" data-cat="all">All (${CIVIC_DATABASE.length})</button>
          <button class="spotlight-tab-btn" data-cat="services">Services</button>
          <button class="spotlight-tab-btn" data-cat="barangays">46 Barangays</button>
          <button class="spotlight-tab-btn" data-cat="legislation">Legislation</button>
          <button class="spotlight-tab-btn" data-cat="officials">Officials</button>
          <button class="spotlight-tab-btn" data-cat="pages">Portals</button>
        </div>

        <!-- Dynamic Results Container -->
        <div class="spotlight-results" id="civic-spotlight-results"></div>

        <!-- Helper Footer -->
        <div class="spotlight-footer">
          <div class="spotlight-footer-keys">
            <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to select</span>
            <span><kbd>ESC</kbd> to close</span>
          </div>
          <div style="font-size: 11px; font-weight: 600; color: #15803D;">
            Tumauini Civic Spotlight
          </div>
        </div>

      </div>
    `;

    document.body.appendChild(backdrop);

    spotlightBackdrop = backdrop;
    spotlightInput = document.getElementById('civic-spotlight-input');
    spotlightResults = document.getElementById('civic-spotlight-results');

    // Attach Event Listeners
    backdrop.addEventListener('click', closeSpotlight);
    document.getElementById('spotlight-close-btn').addEventListener('click', closeSpotlight);

    // Tab buttons
    const tabButtons = backdrop.querySelectorAll('.spotlight-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-cat');
        selectedIndex = 0;
        performSearch();
      });
    });

    // Input typing
    spotlightInput.addEventListener('input', () => {
      selectedIndex = 0;
      performSearch();
    });

    // Keyboard navigation
    spotlightInput.addEventListener('keydown', handleKeyNavigation);

    // Initial populate
    performSearch();
  }

  // =========================================================================
  // 5. SEARCH & HIGHLIGHT LOGIC
  // =========================================================================
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function highlightMatches(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return text.replace(regex, '<span class="spotlight-match">$1</span>');
  }

  function performSearch() {
    if (!spotlightInput || !spotlightResults) return;

    const query = spotlightInput.value.toLowerCase().trim();

    filteredItems = CIVIC_DATABASE.filter(item => {
      const matchesCat = currentCategory === 'all' || item.category === currentCategory;
      if (!matchesCat) return false;

      if (!query) return true;

      const titleMatch = item.title.toLowerCase().includes(query);
      const descMatch = item.desc.toLowerCase().includes(query);
      const badgeMatch = item.badge.toLowerCase().includes(query);
      const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(query));

      return titleMatch || descMatch || badgeMatch || keywordMatch;
    });

    renderResults(query);
  }

  function renderResults(query) {
    spotlightResults.innerHTML = '';

    if (filteredItems.length === 0) {
      spotlightResults.innerHTML = `
        <div class="spotlight-zero-state">
          <div style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; color: #8C8C8C;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <h4 class="spotlight-zero-title">No Matching Civic Records</h4>
          <p class="spotlight-zero-sub">We couldn't find anything matching "${query}". Try searching for permits, barangay names, ordinances, or officials.</p>
        </div>
      `;
      return;
    }

    filteredItems.forEach((item, index) => {
      const a = document.createElement('a');
      a.className = `spotlight-item ${index === selectedIndex ? 'is-selected' : ''}`;
      a.href = item.url;
      a.setAttribute('data-index', index);

      a.addEventListener('mouseenter', () => {
        setSelectedIndex(index);
      });

      a.innerHTML = `
        <div class="spotlight-item-left">
          <div class="spotlight-item-icon" aria-hidden="true">
            ${getIconSvg(item.type)}
          </div>
          <div class="spotlight-item-content">
            <span class="spotlight-item-title">${highlightMatches(item.title, query)}</span>
            <span class="spotlight-item-desc">${highlightMatches(item.desc, query)}</span>
          </div>
        </div>
        <div class="spotlight-item-right">
          <span class="spotlight-badge">${item.badge}</span>
          <svg class="spotlight-item-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      `;

      spotlightResults.appendChild(a);
    });

    scrollSelectedIntoView();
  }

  function setSelectedIndex(index) {
    selectedIndex = index;
    const items = spotlightResults.querySelectorAll('.spotlight-item');
    items.forEach((el, idx) => {
      if (idx === selectedIndex) {
        el.classList.add('is-selected');
      } else {
        el.classList.remove('is-selected');
      }
    });
  }

  function scrollSelectedIntoView() {
    const selectedEl = spotlightResults.querySelector('.spotlight-item.is-selected');
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: 'nearest' });
    }
  }

  function handleKeyNavigation(e) {
    if (!filteredItems.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredItems.length;
      setSelectedIndex(selectedIndex);
      scrollSelectedIntoView();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
      setSelectedIndex(selectedIndex);
      scrollSelectedIntoView();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        window.location.href = filteredItems[selectedIndex].url;
      }
    }
  }

  // =========================================================================
  // 6. OPEN & CLOSE SPOTLIGHT API
  // =========================================================================
  function openSpotlight() {
    if (!spotlightBackdrop) injectSpotlightDOM();

    spotlightBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (spotlightInput) {
        spotlightInput.focus();
        spotlightInput.select();
      }
    }, 50);
  }

  function closeSpotlight() {
    if (!spotlightBackdrop) return;
    spotlightBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  function toggleSpotlight() {
    if (spotlightBackdrop && spotlightBackdrop.classList.contains('open')) {
      closeSpotlight();
    } else {
      openSpotlight();
    }
  }

  // Global Keyboard Shortcuts (Ctrl + K / Cmd + K / Escape)
  document.addEventListener('keydown', (e) => {
    // Ctrl + K or Cmd + K
    if ((e.ctrlKey || e.metaKey) && (e.key.toLowerCase() === 'k')) {
      e.preventDefault();
      toggleSpotlight();
      return;
    }

    // Escape closes modal
    if (e.key === 'Escape') {
      if (spotlightBackdrop && spotlightBackdrop.classList.contains('open')) {
        closeSpotlight();
      }
    }
  });

  // Expose global functions on window
  window.openSpotlight = openSpotlight;
  window.closeSpotlight = closeSpotlight;
  window.toggleSpotlight = toggleSpotlight;

  // Initialize on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSpotlightDOM);
  } else {
    injectSpotlightDOM();
  }

})();
