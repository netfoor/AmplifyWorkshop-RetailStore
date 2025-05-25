import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { Product } from 'aws-cdk-lib/aws-servicecatalog';

// == STEP 1 ===============================================================
// Define your Data schema. This is the schema for your table.
const retailStoreSchema = a.schema({
  Product: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      price: a.float(),
      current_stock: a.integer(),
      image: a.string(),
      rating: a.float(),
      style: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

// You can define authorization rules for your schema. The example above allows
// public access to the Product model using an API key. You can also define
// authorization rules for other models in your schema. For example, you can
// define a model for orders and allow only authenticated users to access it.
//| Escenario                                          | Modo recomendado          |
//| -------------------------------------------------- | ------------------------- |
//| Sitio público de catálogo de productos             | `apiKey` o `identityPool` |
//| App móvil donde usuarios pueden usar sin login     | `identityPool`            |
//| Panel de administración con login                  | `userPool`                |
//| App empresarial con login federado (Google, Azure) | `oidc`                    |
//| Comunicación entre servicios (Lambda, S3)          | `iam`                     |



// Step 2: export the schema for use in your frontend code
export type Schema = ClientSchema<typeof retailStoreSchema>;

// Step 3: export the schema for use in your backend code
export const data = defineData({
  schema: retailStoreSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 7,
    },
  },
});
