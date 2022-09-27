HMC Web Archive
---------------

Documentation and notes on dealing with the HMC Website, and other tech issues.

### Ferry App

Ideas for a improving ferry access.

* Three Google Sheets to manage the Ferry lists
    * Member list
        * Access List
        * Delinquent List
        * (Frequent) Contractors 

* AppSheet can useers pay their own monthly fee. 
    * [AppSheet Pricing/features](https://solutions.appsheet.com/pricing)

* Ferry Bottleneck: Authorizing Guest passes quickly
    * Owner must prove that they authorized the Guests to enter the island, equivalent to Owner's signature
        * QR Code:  Scan could provide Authentication & Authorization for specific License Plate

Quickbooks database of all the users
    * SSO for logging into HIO?
        * Not so fast, would require all members to be within a google org for their SSO to work.

TODO
----

* [x] GH Organization
    * [x] Private repo
* [ ] Cull  `board/members/contacts.html`?
* [ ] Create new page for all committees, and replace the standalone committee web pages; eg: rules.html...

# HerronIsland.org

### Development 

Running a pyhton3 web server will effectively simulate the same webserver as the live [website](herronisland.org).

Python3 makes it easy as opening a terminal, moving cursor to HerronIsland directory, and running: `python3 -m http.server`.

```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

You can then access the HMC webpage by opening a [browser to the localhost port](http://localhost:8000)

No additional python libraries need to be installed, only the python3 programming language.

## Carol's TODOs

* [ ] Katri Island Manager updates

Main Page
---------

index.html

Documents Page
--------------

`/home/members/login.html`

Calender Update
---------------

Location: `home/calendar/calendarx.pdf`

Reason for `...x.pdf`: FTP server is acting up and not allowing any file to overwrite the calendar.pdf for some weird reason... so update all links to use calendarx.pdf.

`cp 7-22-21\ calendar.pdf ~/HerronIsland/home/calendar/calendarx.pdf`

Manager Report (Monthly)
--------------

* cp ... home/members/archives/manager/manager_%M%Y.pdf
* vi home/members/archives/index_mgr.html index.html home/members/login.html

Board Meeting Agenda
--------------------

* cp ... /home/board_agenda_%Y%M%d.pdf
* `vi index.html`

Monthly Meeting Minutes
----------------------

`cp June\ 12\,\ 2021\ Minutes.pdf ~/HerronIsland/home/members/archives/minutes/min_jun21.pdf`

vi home/members/archives/index_min.html home/members/login.html index.html

Audit Report
------------

* cp ... home/members/archives/audits/audit_%Y.pdf
* vi home/members/index_aud.html

Beachcomber Update
---------------------

cp ... `/home/members/archive/beachcombers/bc_%M%Y.pdf`
 
`vi index.html menu.html home/members/login.html home/members/archives/index_bc.html`

Ferry Schedule
--------------

Holy hell...

Ferry Committee Meeting Minutes
-------------------------------

mv ... `home/committees/min_ferry_%Y%m.pdf`

vi home/committees/index.html

Road Committee Meeting Minutes
-------------------------------

mv ... `home/committees/min_roads_%Y%m.pdf`

vi home/committees/index.html

Personnel Changes
-----------------

vi home/board/board.html
vi home/members/contacts.html

Ferry Access Policy
-------------------

mv ~/Downloads/Ferry\ access\ policy_compressed.pdf home/members/ferryaccess.pdf

vi home/members/login.html

Annual Meeting Minutes
----------------------

`cp 2021\ Annual\ Metting\ Minutes.pdf ~/HerronIsland/home/members/archives/minutes/min_ann21.pdf`

`vi index_mem_min.html`

Annual Manager Report
---------------------

`cp ... ~/HerronIsland/home/members/archives/manager/manager_ann%Y.pdf` 
`vi home/members/archives/index_mgr.html index.html home/members/login.html`

Boosters Updates
-------------------

Root directory home/boosters/...

**Minutes**

cp *.pdf ~/HerronIsland/home/boosters/old_boosters/

vi home/boosters/old_boosters/boosters_minutes.html

Emergency Prep Committee
---------------------

home/committees/ep.html + some local documents

Committee Chart
---------------

vi home/committees/chart.html

Some nice CSS edits for Tables in the chart.html page.

There are a lot of sub files linked to from the chart page, each one needs to get updated depending on which committees are active. Some linking to the board/board.html page, which could be expanded in the future.

### Committees 

`index.html` will be the new aggregation of all the Committee information with `#` links.

