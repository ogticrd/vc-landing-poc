Verifiable Credentials – Landing Page (v1) Specification

1. Purpose & Goals
   • Explain what Verifiable Credentials (VCs) are, why they matter, and how they work at a high level (no deep technical architecture).
   • Focus on benefits for citizens and institutions.
   • Drive institution sign-ups via a clear Call-to-Action (CTA): “Join / Request Integration”.
   • Set expectations: issuance, revocation, and modification are institutional responsibilities within the VC lifecycle.
   • Communicate the approach: decentralized verification aligned with the VC standard, while acknowledging that issuer status checks may still be needed.

⸻

2. Audiences
   • Institutions (issuers/verifiers) evaluating adoption and integration requirements.
   • Citizens (holders) wanting to understand practical benefits and usage contexts.

⸻

3. Core Messages
   • Decentralized by design: VCs can be verified without consulting a central registry each time, following the standard’s intent.
   • Issuer status checks: For validity or status (e.g., revoked/suspended), verifiers may query the issuing entity.
   • Institution duties: Issue, revoke, modify credentials; provide an interoperable interface (e.g., via X-Road).
   • Holder benefits: Use credentials directly from their phone; fewer trips, faster checks, reusable across services.
   • Privacy & control: Data stays with the owner; verifiers query the source/issuer, and all calls are auditable on the issuer’s side.

⸻

4. Scope (v1 Landing Only)
   • Persuasive, informational landing page selling the concept.
   • Simple interest form for institutions.
   • No live issuance, wallet integration, or DID tooling in v1.

⸻

5. Information Architecture (IA) 1. Hero: headline + subhead + primary CTA (“Join / Request Integration”). 2. How it works (high-level):
   Issuance → Holder’s wallet → Verification (decentralized proof + optional issuer status check). 3. Benefits:
   • Citizens: speed, reuse, convenience.
   • Institutions: fraud reduction, automation, auditability. 4. Institution requirements:
   • API interoperability (e.g., X-Road).
   • DID endpoint URL.
   • Authentication & minimal SLAs. 5. Standards & trust:
   • Alignment with VC standards and best practices. 6. FAQ:
   • Revocation, status checks, privacy, API usage, support. 7. CTA section:
   • Short form to request integration.

⸻

6. Detailed Content Outline & Draft Copy

Hero
• H1: Credenciales Verificables para el Estado y la Ciudadanía
• Subhead: Emite, porta y verifica credenciales de forma segura, con verificación descentralizada y estatus consultable con la entidad emisora.
• Primary CTA: Quiero Integrarme (anchors to form)

Cómo funciona (alto nivel) 1. Emisión: La institución crea y firma la credencial. 2. Titular: El ciudadano la guarda en su wallet y la presenta cuando la necesita. 3. Verificación: Cualquiera puede verificar criptográficamente la prueba; para el estatus (vigente/revocada), el verificador consulta al emisor.

Beneficios
• Ciudadanos: Menos fricción, reutilización multi-servicio, uso directo desde el teléfono.
• Instituciones: Interoperabilidad, menor fraude, trazabilidad de consultas.

Qué necesita tu institución
• API interoperable (p.ej., X-Road) para exponer datos de estatus/atributos (sin almacenamiento por terceros).
• Autenticación y autorización documentadas para el consumo del API.
• Endpoint público DID/DID-document (ruta oficial en su dominio) para claves/metadata.
• Proceso claro de revocación (quién, cómo, tiempos).

Estándares y confianza

Nos alineamos al estándar de Credenciales Verificables.
El objetivo: verificación descentralizada con opción de consulta de estatus al emisor.

FAQ sugerida
• ¿La verificación es 100% descentralizada?
La prueba criptográfica sí; el estatus actual puede requerir consulta al emisor.
• ¿Quién emite/revoca?
Cada institución gestiona su ciclo de vida de credenciales.
• ¿Quién usa el API?
Nuestro backend/plug-in interopera con la institución; el público no accede directamente.
• ¿Dónde vive la data?
En la institución (origen) y en la wallet del titular; las consultas quedan auditadas por el emisor.

CTA final
• Formulario corto: institución, nombre, email, teléfono, dominio oficial, responsable técnico.
• Mensaje post-envío: Solicitud recibida + próximos pasos.

⸻

7. UX & Componentes (v1)
   • Navbar: logo, anclas, CTA “Integrarse”.
   • Hero: imagen/ilustración conceptual.
   • Cards: beneficios para Ciudadano vs Institución.
   • Timeline/Stepper: flujo “Cómo funciona”.
   • FAQ accordion.
   • Form: validación básica + mensaje de confirmación.

⸻

8. Requisitos Técnicos
   • Stack: Next.js / React + Tailwind CSS.
   • Accesibilidad: WCAG 2.1 AA (contraste, navegación por teclado, etiquetas aria).
   • Performance: Lighthouse ≥ 90 (LCP < 2.5s en móvil).
   • i18n: Español como idioma por defecto; llaves listas para EN.
   • SEO: meta-tags OG/Twitter, schema.org (WebSite/Organization), sitemap.
   • Analytics: Page views, CTA clicks, form submissions.
