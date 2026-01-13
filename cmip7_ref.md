---
layout: page
title: CMIP7 REF
---

## CMIP7 Rapid Evaluation Framework (REF)
As climate models become increasingly complex, there is a need for systematic and comprehensive evaluation and benchmarking through comparison with best-available observational data to assess model fidelity across a wide range of variables.

The vision for the [Rapid Evaluation Framework](https://wcrp-cmip.org/cmip-phases/cmip7/rapid-evaluation-framework/)(REF) tries to address this need. It is a community owned evaluation framework, built upon, and compatible with, existing community evaluation packages that incorporates an application programming interface (API) for executing metrics generated from these community evaluation packages, across the globe. The goal of the REF is, for its Coupled Model Intercomparison Project 7th phase ([CMIP7](https://wcrp-cmip.org/cmip-phases/cmip7/)) Assessment Fast Track version, to provide a complete end to end system allowing a systematic and rapid performance assessment of the expected models participating in the CMIP7 Assessment Fast Track, supporting the seventh IPCC Assessment Report (AR7) cycle.

Community evaluation packages contributing to the Assessment Fast Track REF include ESMValTool, ILAMB/IOMB and PMP. Multiple diagnostics from each package were adopted so they can be executed from within the REF, and provide important and rapid evaluation insights of new CMIP7 Assessment Fast Track simulations. The diagnostic outputs are then published alongside the model output on the Earth System Grid Federation (ESGF) through an easily accessible website.

More information about the REF can be found in the REF overview paper ([Hoffman et al., 2026](https://egusphere.copernicus.org/preprints/2025/egusphere-2025-2685/)) or the [REF Github repository](https://github.com/Climate-REF/climate-ref).

![REF schematic](/assets/img/CMIP7ref_schematic.png){:style="float: left;margin-right: 16px;margin-top: 16px;"}
*The high-level workflow for the Rapid Evaluation Framework (REF) run on Earth System Grid Federation (ESGF) nodes (Source: [Zenodo](https://doi.org/10.5281/zenodo.15594502))*.

ESMValTool contributes diagnostics such as the calculation of ECS, TCR, TRCE and ZEC, but also diagnostics characterizing ENSO, cloud radiative effects, Antarctic/Arctic sea ice area seasonal cycle, stratospheric ozone climatologies, key climate variables at different global warming levels, climate drivers for fire, and historical changes in climate variables. A full list of the diagnostics calculated by the Assessment Fast Track REF can be found [here](https://zenodo.org/records/14284375).
