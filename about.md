---
layout: page
title: About
---

## What is the ESMValTool?

![ESMValTool-logo](/assets/img/EVA-logo.png){:style="float: left;margin-right: 16px;margin-top: 16px;"}

Earth System Model Evaluation Tool (ESMValTool) is an open-source community-developed diagnostics
and performance metrics tool for the evaluation and analysis of Earth System Models (ESMs). ESMValTool
allows for a comparison of single or multiple models against predecessor versions and
observations. The aim of ESMValTool is to take model evaluation to the next level by
facilitating analysis of many different ESM components, providing well-documented source code and
scientific background of implemented diagnostics. Traceability and reproducibility of the results are
ensured by providing detailed provenance records for all output. While originally designed to facilitate
a more comprehensive and rapid evaluation of models participating in the
[Coupled Model Intercomparison Project (CMIP)](https://www.wcrp-climate.org/wgcm-cmip),
the tool can also be used to analyze output from regional models, a large variety of gridded observational data
and reanalysis datasets. The development of ESMValTool is supported by several
[national and international projects](https://www.esmvaltool.org/acknowledgements).
ESMValTool has been used in several chapters of the
[Working Group I contribution to the Intergovernmental Panel on Climate Change's Sixth Assessment Report (IPCC AR6)](https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/).
ESMValTool has been selected by the [CMIP7 Model Benchmarking Task Team](https://wcrp-cmip.org/cmip7-task-teams/model-benchmarking/) as one of the featured model benchmarking and evaluation tools. In 2024, the ESMValTool team received the first annual [Helmholtz incubator software award for sustainability](https://www.hifis.net/announcement/2024/07/18/sw-award-final/).

## Main Features

* Community effort with more than [200 developers from over 60 institutes](https://www.esmvaltool.org/team)
  open to both users and developers.
* Wide scope: includes many diagnostics and performance metrics covering different aspects of the
  Earth system.
* High flexibility: new diagnostics and more observational data can be easily added.
* Multi-language support: Python, NCL, R and Julia; other open-source languages are possible.
* Reproducibility of the results (provenance).
* Well-documented source code and diagnostics.
* Extensive [user documentation](https://docs.esmvaltool.org/).
* Step-by-step [tutorial](https://tutorial.esmvaltool.org/) for new users and developers.


## Video Introduction

ESMValTool is listed as one of the [model benchmarking and evaluation tools on the CMIP website](https://wcrp-cmip.org/tools/model-benchmarking-and-evaluation-tools/). The [ESMValTool video](https://youtu.be/sidM4EB6Sbo?list=PLfNPd2rlkdzOxdo5tAZHS3VUeMFn2QwAj) from the CMIP Model Benchmarking Task Team is available on YouTube.

<link rel="stylesheet" type="text/css" href="../assets/css/video.css">

<div class="video" style="background-image: url('../assets/img/esmvaltool_video_preview_dark.jpg')">
  <iframe
    class="video__iframe"
    width="736"
    height="360"
    data-src="https://www.youtube-nocookie.com/embed/sidM4EB6Sbo?si=u14rSG-pr7uYRiGY"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen="allowfullscreen"
  ></iframe>
  <form class="video__notice">
    <p>
      We've embedded content from YouTube here. As YouTube collects personal data and tracks your
      viewing behavior, we'll only load the video after you consent to their use of cookies and
      the technologies described in their
      <a href="https://www.youtube.com/t/privacy">privacy policy</a>.
    </p>
	<input id="user_consent" type="button" value="Allow content from YouTube" onclick="activateVideos();" />
  </form>
</div>


<script src="../assets/js/video.js"></script>