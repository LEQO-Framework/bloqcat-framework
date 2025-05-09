// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['production'] = true;
  window['env']['nisqAnalyzer'] = "localhost" ? true : false;
  window['env']['QC_ATLAS_HOST_NAME'] = "localhost";
  window['env']['NISQ_ANALYZER_HOST_NAME'] = "localhost";
  window['env']['PATTERN_ATLAS_HOST_NAME'] = "localhost";
  window['env']['PATTERN_ATLAS_UI_HOST_NAME'] = "localhost";
  window['env']['LATEX_RENDERER_HOST_NAME'] ="localhost";
  window['env']['QC_ATLAS_PORT'] = "6626";
  window['env']['NISQ_ANALYZER_PORT'] = "5010";
  window['env']['PATTERN_ATLAS_PORT'] = "1977";
  window['env']['PATTERN_ATLAS_UI_PORT'] = "1978";
  window['env']['LATEX_RENDERER_PORT'] ="5030";
  window['env']['CONFIG_SERVER_HOST_NAME'] ="localhost";
  window['env']['CONFIG_SERVER_PORT'] ="2379";
})(this);

