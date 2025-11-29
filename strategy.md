---
layout: page
title: ESMValTool long-term strategy
---

###### Authors: ESMValTool Steering Committee with input from the ESMValTool teams and community. 

###### Version 1.0
###### November 2025

Who is this strategy for, and what is its purpose?
1. ESMValTool consortium partners, for whom this document serves as  a common understanding of our ambitions and helps us to align annual work plans with our shared goals.
2. ESMValTool stakeholders, including user representatives and developers of Earth system modelling research infrastructures, for whom this captures the ways in which ESMValTool will operate within the wider ecosystem and facilitate the exploitation of Earth observation and model data.
3. Funding bodies, for whom this strategy demonstrates that specific proposals align with a community vision for Earth system model evaluation and analysis.

---
#### Contents
- [The scientific challenges for Earth system data analysis](#scientific_challenges)
- [Impact on the Earth system community](#impact)
- [Software sustainability](#sustainability)
- [New capabilities](#new_capabilites)
  - [Exascale computing and high-resolution models](#exascale_computing)
  - [Support for more model and data types](#data_types)
  - [Optimising exploitation of observations including observational uncertainties](#observational_uncertainties)
  - [Support for expansion for artificial intelligence methods in modelling and evaluation](#ai_methods)

---

The Earth System Model Evaluation Tool (ESMValTool) is an open-source community-developed diagnostics and performance metrics tool that makes evaluation and analysis of climate model simulations and Earth observations easier and more powerful for Earth system scientists. A comprehensive evaluation is crucial for model improvements and a prerequisite for more reliable climate projections to be used as guidelines for climate policy. ESMValTool has been developed into a well-tested and well-documented tool that facilitates analysis across different Earth system components (e.g. atmosphere, ocean, land, sea-ice, biogeochemistry).

While originally designed to facilitate a comprehensive and rapid evaluation of models participating in the Coupled Model Intercomparison Project (CMIP), the tool can now also be used to analyse some output from regional models, a large variety of observational data and reanalysis datasets. The development of ESMValTool has grown into an international effort supported by a large number of national and international projects and more than 200 partners from about 60 institutions. ESMValTool has been used in several chapters of the Working Group I contribution to the Intergovernmental Panel on Climate Change’s Sixth Assessment Report (IPCC AR6) and has been selected as one of the benchmarking and evaluation tools for CMIP7.

In order to formalise governance of a tool that serves a growing community of users and developers, we have formed an ESMValTool Consortium. The governance structure of the consortium includes sustained contributions from partner institutes, cross-community teams to lead on technical, scientific and user engagement priorities, and a steering group that decides on the strategic direction of the tool. This document captures that long-term strategic direction, and will be regularly reviewed by the steering committee, in consultation with the ESMValTool community. The consortium welcomes the addition of new partners who can contribute sustained effort to the development, maintenance and support of ESMValTool.

<a name="scientific_challenges"></a>
## The scientific challenges for Earth system data analysis

We are at an important juncture in Earth system modelling, with fundamental changes to the scope of requirements and in the avenues being opened by high performance computing architectures and artificial intelligence. Plans are well advanced for upcoming international model intercomparisons, including the next round of the Coupled Model Intercomparison Project (CMIP7, which will underpin assessments by the Intergovernmental Panel on Climate Change), the Coordinated Regional Climate Downscaling Experiment (CORDEX) and the SPARC Reanalysis Intercomparison Project (S-RIP2). Within these intercomparisons, and more widely in the international model development effort, data volume is increasing, with a growing number of models representing processes at the km scale. There is great potential in Earth observation datasets still to be exploited for climate analysis and model evaluation, with an increased range of physical quantities available and more sophisticated estimates of uncertainty. These changes present profound challenges for the analysis and evaluation of Earth system model and observation data.

- **Exascale computing and high-resolution models and observations:** Future-proofing for the models and observations of tomorrow, to enable scientists to realise the huge potential of the upcoming generation of exascale computing and km-scale global models, including Earth Visualisation Engines (EVE). These will bring new technical demands, in handling even greater volumes of data, processing data on the fly, an increased need for monitoring ongoing costly simulations, and scientific demands for diagnostics that constrain the wide range of space and time scales being modelled.
- **Support for more model types:** Improved support for a wider range of today's models, to extend the Earth system analysis that ESMValTool already facilitates. Thus, bring full support to more model grids, in particular the global tripolar grids of the NEMO ocean model and regional domains used in CORDEX.
- **Optimising exploitation of observations including observational uncertainties:** Improved comparability of satellite and model data, to more directly assess the improvement of models with Earth observations. This includes considering the temporal and spatial sampling properties of satellites as well as instrument and retrieval specific characteristics.  Additionally, an improved consideration of observational uncertainties to ensure that differences between individual model simulations and observations are understood is crucial to quantitative comparisons between model and satellite data. This requires a more advanced handling of observational uncertainty as well as model uncertainty e.g. associated with internal variability of the climate system.
- **Utilising Artificial Intelligence (AI) and Machine Learning (ML) methods:** Robust evaluation of ML and AI based climate modelling including emphasis on explainability and interpretability of such models as well as exploring innovative AI methods for evaluation such as cross-domain evaluation.  ML methods are well suited to expand evaluation or model analysis in multivariate space. 
- **Community impact:** Scientists need to be able to exploit the existing and future capabilities of ESMValTool to their full extent, in order to perform the evaluation and analysis that is crucial to the progression of Earth system science. It is especially important to empower low-resource environments, particularly those in developing countries most impacted by climate change, to benefit from the capable and stable ESMValTool framework. For this to happen scientists need access to training materials, tutorials, and to be well informed when new capabilities become available. In short, the user community needs to be  continuously and consistently engaged.
- **Long-term software sustainability:** Lastly, and arguably most important, all of the above requires a sustainable software ecosystem that users, developers and other stakeholders can depend on. This requires continued maintenance and improvement of the infrastructure on which software development and deployment depends.

<a name="impact"></a>
## Impact on the Earth system community

We help climate scientists to fully exploit the wide range of observation and model data that ESMValTool can handle. We do this through supporting our existing community of users and developers as well as new user groups. Some ways we do this are: 

- Updates to training materials to ensure they are consistent with the latest ESMValTool release.
- Addressing critical gaps in material – e.g. addition of an observation data set in a lesson recipe or inclusion of a section or lesson in the tutorial.
- Regularly delivering tutorials, in-person and online.
- Analysing user feedback from tutorials and GitHub discussions and issues.
- Responding in a timely manner to issues and questions raised in the GitHub community discussions forum.
- Publicity and engagement including through talks and social media.

Our ambitions for user engagement beyond the essential ongoing activities are:

- Targeted training towards specific user groups for example, ESA CCI user communities, IPCC authors, land surface modellers. 
- Periodic review and updates to documentation and tutorials based on user feedback. Adoption of the [diataxis](https://diataxis.fr/) framework for tailoring documentation to use cases.
- Assess community needs for ESMValTool capabilities and training, for example through surveys and discussions at scientific workshops.
- Publicity and engagement through talks at conferences and project meetings, and production of publicity materials such as videos or presentations
- Impact assessments – how we are doing and how we are helping different groups of users achieve their research/policy development goals.
- Development of context-specific training material: This could range from facilitating the use of specific observation data types, evaluating and quantifying uncertainty estimates to domain-specific evaluation or regional model evaluation.
- Broaden engagement to researchers in countries that are newly developing climate science capabilities, particularly those that will be most impacted by climate change. These researchers stand to benefit the most from open source tools for climate data analysis. This will also promote increased focus of the whole climate science community on scientific questions of importance to countries facing the greatest impacts from climate change. 
- Help advanced users to become contributors and develop new capabilities that address the needs of their community.
- Encouraging open science and FAIR research software by providing clear guidance for researchers on how to publish the analyses they develop with the help of ESMValTool.
- Cross-community engagement - we sit at the intersection of different groups such as modellers, observational data providers and downstream users. Effectively engaging with these communities is essential for effective delivery of ESMValTool services.

<a name="sustainability"></a>
## Software sustainability

Actions that developers will feel directly and that users will benefit from through more rapid and well-supported delivery of new capabilities and user support.

- Building our mutually supportive community of developers.
- Maintenance and enhancement of development tools, esp on GitHub.
- Maintenance and enhancement of test coverage and testing tools, including the Recipe Test Workflow for regression testing.
- Ensure that governance processes follow best practice for open source projects.
- Ensure that ESMValTool keeps in step with the global and European Earth system research infrastructure, including the ESGF.
- Building strong relationships with the upstream development communities that we depend on, such as Pangeo (Iris, Dask, Jupyter) and ESGF (esgf-pyclient -> intake-esgf).
- Maintaining ESMValTool and observation pools on dedicated high performance computing servers.
- Develop dataset fixes in a standalone package that is shared with the wider ESGF/CMIP and observational (NASA, ESA, etc) communities. The package should make it possible to configure fixes instead of program them for easy extension and adoption. New CMORizers could be built on top of the base CMIP fixes package and then be implemented as recipes.

<a name="new_capabilites"></a>
## New capabilities

The science challenges outlined above require new capabilities in ESMValTool, spanning the spectrum from technical to scientific. For each set of capabilities, below we outline the motivation and impact, a high-level description of the work needed, and note particular challenges. The description does not include technical detail: that is captured elsewhere.

<a name="exascale_computing"></a>
### Exascale computing and high-resolution models

- Handling even greater volumes of data. Data volume is already a challenge for medium-resolution data if many simulations or high temporal resolution is utilised; it will become more challenging as spatial resolution and ensemble sizes grow. Efficient memory management is key to good performance. Thanks to extensive work by the ESMValTool and Iris core developers, ESMValTool is better optimised than other ESM evaluation tools, and there are opportunities to optimise further.
- With high resolution models already utilised for example in the CMIP6 HighResMIP, archive restrictions mean that some high-frequency model outputs have to be post-processed while the model is still running and then discarded. Support for this will require tighter integration of ESMValTool into model simulation workflows.
- With the growing energy cost and elapsed time of models, it is more important than ever to monitor the scientific performance of a simulation while it is running so as to identify problems at the earliest opportunity. ESMValTool is used for this purpose by modelling centres already. It could be even more powerful with the additional capability to cache and augment pre-processing calculations from prior ESMValTool executions.
- Storm-resolving models need to accurately simulate processes spanning a very wide range of scales, from convection operating at the km-scale to to circulation processes at 1000-km scales, as well as the upscale interactions between them. The cost of these models also means that they are increasingly being tested using shorter simulations, which need to be assessed with metrics specific to the experimental design.

<a name="data_types"></a>
### Support for more model and data types

There are some model and observation types that are not (fully) supported by ESMValTool yet. Adding or extending support for these would allow more users to take advantage of the Earth system analyses that ESMValTool already facilitates.

- Improved support for regional domains and models (e.g. CORDEX)
- Improved support for special irregular grids used in ocean models (e.g. the global tripolar grids of the NEMO & MOM ocean models)
- Improved support for point measurements (ground-based station data) or aircraft data
- Support for evaluation of standalone simulations of component models (e.g. land-only and ocean-only simulations)

<a name="observational_uncertainties"></a>
### Optimising exploitation of observations including observational uncertainties

Satellite data providing global and long-term coverage play an essential role for evaluating the increasingly complex and high-resolution climate models. For a full quantitative comparison between model data and satellite observations, effects of the incomplete spatial and temporal sampling, instrument characteristics and uncertainties in the measurements and in the retrievals have to be taken into account.

- Development of a method to correct for the sampling bias of polar orbiting satellites as well as instrument and retrieval specific limitations for selected satellite products.
- Development of a method to propagate pixel-wise uncertainty information provided by selected satellite datasets to the temporal and spatial scales relevant for climate model evaluation.
- Implementation of error propagation methods and corrections of satellite data into ESMValTool.
- Enabling use of expanded uncertainty structures in observations.

<a name="ai_methods"></a>
### Support for expansion for artificial intelligence methods in modelling and evaluation

- Evaluation with emphasis on explainability or interpretability of the artificial intelligence / machine learning (AI/ML) algorithms used, including model components of Digital Twin systems.
- Holistic evaluation that ensures the integrity of the physical system when data driven approaches are used in modelling.
- Innovation in evaluation through AI methods for example through multidimensional analysis, emulators and causality investigation.
- Building the ability to attribute performance when black-box ML methods are used for model development.
