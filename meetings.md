---
layout: page
title: Events
---
<!-- If you want to add a meeting, change the yml files in _data/events/xxx.yml; This page will automatically format those entries and doesn't need to be changed to add events -->
{% assign currentdate = site.time | date: '%Y%m%d' %}

## Monthly Meetings
Monthly Meetings for community members take place regularly and are announced in the [Community Repository](https://github.com/ESMValGroup/Community/discussions), with doodles being sent to the mailing list to find a timeslot every month. Each meeting lasts about one hour. Anyone is invited to join these meetings, all questions are welcome. Around scheduled releases, the highlights and possible issues due to backwards incompatibility will be discussed. For topics that require a more in-depth discussion, we suggest to leave a message in the corresponding discussion thread. Meeting notes for previous meetings can also be found in that repository.

### Upcoming Monthly Meeting

{% assign meeting = site.data.events.monthly_meetings.dates[0] %}
{% assign meetingDate = meeting.date | date: '%Y%m%d' %}

{% if meetingDate >= currentdate %}
The next monthly meeting is scheduled for **{{ meeting.date }}** on [{{ meeting.place }}]({{ meeting.meeting-link }}).<br>
Further Information can be found [here]({{ meeting.discussion-link }}).

{% else %}
The date for the next monthly meeting has not been determined, if you want to be notified when it is fixed, consider joining the [mailing list](https://docs.esmvaltool.org/en/latest/introduction.html#mailing-list) or check the [Discussions on the GitHub Community Repository](https://github.com/ESMValGroup/Community/discussions).
{% endif %}





## Workshops

There are on average two community workshops a year, a hybrid meeting in spring and a virtual one in autumn.

### Upcoming Workshops
{% assign future = 0 %}
{% for workshop in site.data.events.workshops %}

    {% assign workshopDate = workshop.date[0]  | date: '%Y%m%d' %}

    {% if workshopDate >= currentdate %}
    {% assign future = 1 %}


**Date: {{ workshop.date[0] }} - {{workshop.date[1]}}** <br>
Location: {{workshop.venue}}<br>
{%- for info in workshop.additional_info -%}
{{info[0]}}: {{info[1] | join: ", " }}<br>
{%- endfor -%}

    {% else %}
        {% if future==0 %}

No date has been set for the next workshop yet, check the [Discussions on the GitHub Community Repository](https://github.com/ESMValGroup/Community/discussions) for updates.

        {% endif %}
        {% break %}
    {% endif %}


{% endfor %}

### Past Workshops

Here you can find information about past workshops.


{% for workshop in site.data.events.workshops %}
    {% assign workshopDate = workshop.date[0]  | date: '%Y%m%d' %}

    {% if workshopDate <= currentdate %}

**{{ workshop.date[0] }} - {{workshop.date[1]}}** <br>
Location: {{workshop.venue}}<br>
{%- for info in workshop.additional_info -%}
{%- if info[0] == 'Agenda' or info[0] == 'Summary' -%}
[{{info[0]}}]({{info[1]}})<br>
{%- else -%}
{{info[0]}}: {{info[1] | join: ", " }}<br>
{%- endif -%}
{%- endfor -%}

    {% endif %}


{% endfor %}