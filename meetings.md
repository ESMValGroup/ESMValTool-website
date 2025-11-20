---
layout: page
title: Events
---
{% assign currentdate = site.time | date: '%Y%m%d' %}

## Monthly Meetings
There are monthly Meetings for community members which are announced in the [Community Repository](https://github.com/ESMValGroup/Community/discussions), with doodles being sent around to determine the best timeslot. Each Meeting takes around one hour. Anyone is invited to join these meetings and can ask questions. If a longer topic is to be brought up for discussion, we suggest to leave a message in the corresponding Discussion Thread. Meeting Notes for previous Meetings can also be found in that repository.

### Upcoming Monthly Meeting

{% assign meeting = site.data.events.monthly_meetings[0] %}
{% assign meetingDate = meeting.date | date: '%Y%m%d' %}

{% if meetingDate >= currentdate %}
The next monthly meeting is scheduled for **{{ meeting.date }}** on [{{ meeting.place }}]({{ meeting.meeting-link }}).

Further Information can be found [here]({{ meeting.discussion-link }}).

{{ meeting.meeting-link }}
{% else %}
The date for the next monthly meeting has not been determined, if you want to be notified when it is fixed, consider joining the mailing list (TODO add link how to join) or check the [Discussions on the GitHub Community Repository](https://github.com/ESMValGroup/Community/discussions).
{% endif %}




{% for meeting in site.data.events.monthly_meetings %}
    {% assign meetingDate = meeting.date | date: '%Y %b' %}
    {{ meetingDate }}

    {% if meetingDate <= currentdate %}
        Test: {{ meetingDate }}
    {% else %}
        Next Meeting Time not set
    {% endif %}


{% endfor %}

## Workshops

There are two community workshops a year, a hybrid meeting in spring and a virtual one in autumn.

## Upcoming Workshops


### 1. ESMValTool community workshop 2024

Date: 27-29 May 2024 \
Venue: DLR, Oberpfaffenhofen, Germany (hybrid meeting) \
Agenda: [Workshop agenda](/assets/pdf/Agenda_ESMValTool_WS_2024-05.pdf)

### 1. ESMValtool community workshop 2023

Date: 27-29 June 2023 \
Venue: SMHI, Norrköping, Sweden (hybrid meeting) \
Agenda: [Workshop agenda](/assets/pdf/ESMValTool_workshop_agenda_June_2023.pdf)

### 2. Technical ESMValtool workshop 2022

Date: 18-20 October 2022 \
Venue: UK Met Office, Exeter, UK (hybrid meeting) \
Agenda: [Workshop agenda](/assets/pdf/ESMValTool_workshop_agenda_Oct_2022.pdf)

### 1. Technical ESMValtool workshop 2022

Date: 13-15 June 2022 \
Venue: Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR), Oberpfaffenhofen, Germany (hybrid meeting) \
[Workshop Summary](/assets/pdf/Summary_ESMValTool_Workshop_Jun_2022.pdf)

### 2. Technical ESMValTool workshop 2021

Date: 23-25 November 2021 \
Venue: virtual meeting \
[Workshop Summary](/assets/pdf/Summary_ESMValTool_Workshop_Nov_2021.pdf)

### 1. Technical ESMValTool workshop 2021

Date: 4-6 May 2021 \
Venue: virtual meeting \
[Workshop Summary](/assets/pdf/Summary_ESMValTool_Workshop_May_2021.pdf)

### 2. Technical ESMValTool workshop 2020

Date: 24-26 November 2020 \
Venue: virtual meeting \
[Workshop Summary](/assets/pdf/Summary_ESMValTool_Workshop_Nov_2020.pdf)

### 1. Technical ESMValTool workshop 2020
Date: 9-13 March 2020 \
Venue: virtual meeting \
[Workshop Summary](/assets/pdf/Summary_ESMValTool_Workshop_Mar_2020.pdf)

### Technical ESMValTool coding workshop

Date: 14-17 October 2019 \
Venue: Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR), Oberpfaffenhofen, Germany \
[Workshop Summary](/assets/pdf/Summary_ESMValTool_Workshop_Oct_2019.pdf)

### Technical ESMValTool coding workshop

Date: 3-6 June 2019 \
Venue: Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR), Oberpfaffenhofen, Germany \
[Workshop Summary](/assets/pdf/4thTechnicalESMValToolWorkshop_190603.pdf)

### CRESCENDO ESMValTool diagnostics workshop

Date: 4-7 February 2019 \
Venue: Swedish Meteorological and Hydrological Institute (SMHI), Norrköping, Sweden \
[Workshop Summary](/assets/pdf/ESMValTool_Workshop_Summary_201902.pdf)

### ESMValTool backend coding workshop

Date: 6-8 February 2019 \
Venue: Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR), Oberpfaffenhofen, Germany \
[Workshop Summary](/assets/pdf/ESMValTool_Workshop_Summary_201902.pdf)

### Technical ESMValTool coding workshop

Date: 18-22 June 2018 \
Venue: Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR), Oberpfaffenhofen, Germany \
[Workshop Summary](/assets/pdf/ESMValTool-v2_Workshop2018.pdf)

### ESMValTool backend coding workshop

Date: 15-19 May 2017 \
Venue: Deutsches Zentrum für Luft- und Raumfahrt e.V. (DLR), Oberpfaffenhofen, Germany \
[Workshop Summary](/assets/pdf/ESMValTool_2ndCodingWorkshopBackend_Summary_1705_Sent.pdf)

### ESMValTool coding workshop on documentation and visualization

Date: 8-12 May 2017 \
Venue: Ludwig-Maximilians-Universität München (LMU), Munich, Germany \
[Workshop summary](/assets/pdf/ESMValTool_1stCodingWorkshopDocuVisualization_Summary_1705_Sent.pdf)

### ESMValTool backend coding workshop

Date: 6-10 February 2017 \
Venue: Met Office, Exeter, United Kingdom

### Technical ESMValTool workshop

Date: 15-16 November 2016 \
Venue: Ludwig-Maximilians-Universität München (LMU), Munich, Germany \
[Second Announcement](201611_TechnicalWorkshopESMValTool_SecondAnnouncement.pdf) \
[Workshop Summary](/assets/pdf/201611_TechnicalWorkshopESMValTool_WorkshopSummary.pdf)

### Technical ESMValTool workshop

Date: 3-4 March 2015 \
Venue: Ludwig-Maximilians-Universität München (LMU), Munich, Germany \
[Workshop Summary](/assets/pdf/201503_TechnicalWorkshopESMValTool_WorkshopSummary.pdf)
