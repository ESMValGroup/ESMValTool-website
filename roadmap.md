---
layout: page
title: Roadmap
---

<h1 style="color:red">This road map is currently under revision. An update will be posted soon.</h1>

## Purpose

This roadmap outlines the ESMValTool development planned including a rough
timeline and (if applicable) the project funding these activities.

**Please add your contributions by sending an email to <a href="javascript:mail('birgit.hassler','dlr.de')">Birgit Hassler</a>**

## ESMValTool development by project (roadmap)

<table>
<thead>
<tr>
<th>Time line</th>
<th>Project</th>
<th>Tasks</th>
</tr>
</thead>
<tbody>
  <tr>
  <td>Q2 2020</td>
  <td>
  <a href="https://redmine.dkrz.de/projects/cmip6-dicad-subproject/">CMIP6-DICAD</a>
  </td>
  <td>
  <ul>
  <li>Import capability of (native) EMAC2 output (M7)</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td>Q4 2020</td>
  <td>
  <a href="https://ukesm.ac.uk/crescendo/">CRESCENDO</a>
  </td>
  <td>
  <ul>
    <li>Making use of observations from ESA CCI and
    obs4MIPs, extending the physical climate to
    include key biogeochemical diagnostics
    (LMU)</li>
  <li>New diagnostics for operational analysis of
  multi-model ESM projections (LMU)</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td>Q3 2020-Q3 2021</td>
  <td>
  <a href="https://climate.esa.int/en/projects/cmug/">ESA CCI CMUG Phase 3</a>
  </td>
  <td>
  Implementation of the following ESA CCI+ datasets
  including new diagnostics and metrics to exploit
  the data for model evaluation (D5.3):
  <ul>
    <li>land surface temperature (MetO)</li>
    <li>long-lived ghg (CH4) (DLR)</li>
    <li>water vapor (DLR)</li>
    <li>sea surface salinity (BSC)</li>
    <li>ocean color (SMHI)</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td>Q3 2020-Q4 2022</td>
  <td>
  <a href="https://is.enes.org/">IS-ENES3</a>
  </td>
  <td>
  <ul>
    <li>Support for unstructured grids (D9.1, met.no)</li>
    <li>Quicklook system for online diagnostics (D9.2, MetO)</li>
    <li>ESGF coupling and distributed computation features (D9.3, UREAD-NCAS)</li>
    <li>Extension to evaluate regional climate models and different timescales (D9.4, BSC)</li>
    <li>IS-ENES3 ESMValTool version including
    coupling to community consensus developed
    packages such as the ENSO metrics package and
    technical improvements such as improved and
    enhanced automated testing (D9.5, DLR)</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td>N/A</td>
  <td>N/A</td>
  <td>
  <ul>
    <li>Autoassess diagnostics full inclusion in ESMValTool</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td>N/A</td>
  <td>N/A</td>
  <td>
  <ul>
    <li>ESMValTool as main monitoring tool for UKESM2 development and deployment</li>
  </ul>
  </td>
  </tr>
  <tr>
  <td>N/A</td>
  <td>N/A</td>
  <td>
  <ul>
    <li>Extending the public Python API for the full functionality of the preprocessor</li>
  </ul>
  </td>
  </tr>
</tbody>
</table>
