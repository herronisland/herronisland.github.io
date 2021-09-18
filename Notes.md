

Ferry App
----------

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

TODO
----

* [ ] GH Organization
    * [ ] Private repo
* [ ] Cull  `board/members/contacts.html`?

HMC
---

Quickbooks database of all the users
    * SSO for logging into HIO?
        * Not so fast, would require all members to be within a google org for their SSO to work.

Main Page
---------

home/home.html

Documents Page
--------------

`/home/members/login.html`

Calender Update
---------------

Location: `home/calendar/calendarx.pdf`

Reason for `...x.pdf`: FTP server is acting up and not allowing any file to overwrite the calendar.pdf for some weird reason... so update all links to use calendarx.pdf.

`cp 7-22-21\ calendar.pdf ~/HerronIsland/home/calendar/calendarx.pdf`


Beachcomber Update
---------------------

`bc_%M%Y.pdf`
 
`vi home/home.html home/members/login.html home/members/archive/index_bc.html

Monthly Meeting Minutes
----------------------

`cp June\ 12\,\ 2021\ Minutes.pdf ~/HerronIsland/home/members/archives/minutes/min_jun21.pdf`

vi home/members/archive/index_min.html home/members/login.html home/home.html


Personnel Changes
-----------------

vi home/board/board.html
vi home/members/contacts.html


Annual Meeting Minutes
----------------------

`cp 2021\ Annual\ Metting\ Minutes.pdf ~/HerronIsland/home/members/archives/minutes/min_ann21.pdf`

`vi index_mem_min.html`
