---
sidebar_position: 1
slug: ./
sidebar_label: Home
title: "Multiwoven Docs: API Reference, Quickstart Guides, and Integrations"
description: "Docs, tutorials, API reference, quickstart guides, and code snippets for getting started with Multiwoven."
---

import { CardList } from "@site/src/components/CardList";
import { Card } from "@site/src/components/Card";

# Welcome to the Multiwoven Docs

**Multiwoven** is a modern data activation platform designed to streamline the connection between data warehouses and customer engagement tools, enhancing your business's data capabilities.

Engage with our easy-to-navigate documentation to get detailed insights on our sources, destinations, and more, or delve into one of our key topics for a deeper understanding of Multiwoven's features.

<CardList size="medium">
  <Card title="Getting Started" href="/getting-started/introduction/" linkText="Learn More">
    Learn what Multiwoven is, what the key concepts are, and how to integrate your first source.
  </Card>
  <Card title="Tutorials" href="/" linkText="Learn More">
    Learn basic platform concepts that cover everything from adding sources to configuring
    destinations.
  </Card>
  <Card title="Connections" href="/" linkText="Learn More">
    Learn about how syncs, data models and connections from source to destinations work.
  </Card>
  <Card title="API Reference" href="/api" linkText="Learn More">
    The REST API has predictable resource-oriented URLs, returns JSON-encoded responses, and authentication.
  </Card>
</CardList>

### Home

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| content 1    |   content 2    |    content 3  |
| content 4    |   content 5    |    content 6  |

> Explore our guides and examples to integrate Multiwoven

```sql
select * from users limit 100;
```

```ruby
res = client.send({
    message => {
        to => {
          "email" => "email@example.com",
        },
        content: => {
          "title" => "Welcome!",
          "body" => "Thanks for signing up, {{name}}",
        },
        data: => { #any data you want to pass to the content or message template
          "name" => "Nuxt.js Enthusiasts",
        },
        routing: => { #any data you want to pass to the content or message template
          "method" => "single",
          "channels" => ["email"],
        },
    },
  })
  puts res.code # the HTTP response code
  puts res.message_id # if the code is 200, this will be the Courier message ID for this notification
rescue Courier::CourierAPIError => re #error sent from from the API
  puts re.message
end
```

```json
{
    "a": "b",
    "c": "d"
}
```

:::info

Edits you make to an automation template will not apply retroactively to any recipients or lists already added to an automation run.

:::

:::caution Can't Undo

Switching the template to the JSONNET editor cannot be undone.

:::

### Changelog

Stay updated with the latest enhancements and fixes in Multiwoven by visiting our [product changelog](./start-here).

----

### Assistance

Our support team is ready to help you with any queries. Reach out to us at [support@multiwoven.com](mailto:support@multiwoven.com) or connect through our live chat service.

---


