## serverless API
Required Services
SNS Topic: pickup which will receive all pickup requests from vendors
SQS Queue (FIFO): packages which will contain all delivery requests from vendors, in order of receipt.
Subscribe this queue to the pickup topic so all pickups are ordered
SQS Queue (Standard) for each vendor (named for the vendor) which will contain all delivery notifications from the drivers


AWS SNS/SQS:
Can be accessed via Account. 

PULL REQs:

https://github.com/yazanbaker94/caps-cloud/pull/1/







## UML Diagram:
![sqs](sqs.png)
