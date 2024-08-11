# Project scope
Build a visual dashboard to show the important metrics.

Order volume detection: The daily order volume needs to show three peaks throughout the day; otherwise, it indicates a potential issue with the system or the business operations

Delivery metrics detection: The delivery distance and time for orders with the same starting and ending points should follow a normal distribution. If these metrics do not conform to a normal distribution, it could indicate a potential issue.

Cost analysis: Calculate the delivery cost for each order based on the distance, time, and fee fields to identify high-cost orders

courier performace analysis：Through delivery time, order completion rate, customer feedback to hierarchy level.

Predicting Canceled and Failed Orders：Unsuccessful orders, such as canceled or failed deliveries, can increase operational costs. To mitigate this, we can develop predictive models to identify problematic orders in advance.

## Comment:
1. delivery distance usually is a end-user / merchant input with cost, so delivery distance could be used for review, but not for detect any anomaly.

2. courier performance `delivery time` on the other hand, could be detect for any anomaly, e.g. if the delivery time is too long, it could be a potential issue.

3. Map visualization could help on geo-location related analysis. e.g. Order heatmap (for delivery, based on the delivery address);

4. food-delivery operation review require a real-time dashboard, to monitor 
- how many order is waiting for partner to accept, 
- how many order is waiting for courier to pick up,
- how many order is on the way, 
- how many order is delivered, 
