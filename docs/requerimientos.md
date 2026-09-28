# Requerimientos del Proyecto

## Requerimientos Funcionales

### Seguidores
### Anuncios

| ID | Descripción | Prioridad | Estado |
|---|---|---|---|
| RF-001 | | Alta | Pendiente |
| RF-021 | Ver el feed personalizado | Media | Pendiente |

#### Criterios de aceptación

### RF-021

**Criterio 1**
- **Dado** un usuario autenticado que sigue a otros usuarios y tags,
- **Cuando** accede a su feed personalizado,
- **Entonces** ve las publicaciones de los usuarios y tags que sigue, ordenadas por fecha.

**Criterio 2**
- **Dado** un usuario que sigue nuevos usuarios o tags,
- **Cuando** recarga su feed personalizado,
- **Entonces** las nuevas publicaciones de esos usuarios y tags aparecen en el feed.
| RF-022 | Publicar un anuncio oficial en una materia | Alta | Pendiente |

#### Criterios de aceptación

### RF-022

**Criterio 1**
- **Dado** un docente autenticado en una materia,
- **Cuando** marca una publicación como anuncio oficial,
- **Entonces** el anuncio aparece destacado en el muro de la materia para todos los inscritos.

**Criterio 2**
- **Dado** un docente que redacta una publicación en su materia,
- **Cuando** la marca como anuncio oficial y confirma,
- **Entonces** el anuncio queda registrado como oficial con autor, fecha y materia, y es visible para los estudiantes inscritos.
| RF-023 | Publicar un anuncio institucional en el muro general | Media | Pendiente |

#### Criterios de aceptación

### RF-023

**Criterio 1**
- **Dado** un administrador autenticado en la plataforma,
- **Cuando** publica un anuncio institucional desde el módulo Anuncios,
- **Entonces** el anuncio aparece en el muro general visible para todos los usuarios.

**Criterio 2**
- **Dado** un administrador que redacta un anuncio institucional,
- **Cuando** confirma la publicación,
- **Entonces** el anuncio queda registrado con autor, fecha y contenido, y es visible en el muro general.

## Requerimientos No Funcionales

| ID | Descripción | Categoría | Estado |
|---|---|---|---|
| RNF-001 | El plugin debe instalarse y funcionar sin errores en Moodle 4.5 LTS (rama MOODLE_405_STABLE). Verificación: ejecutar la suite PHPUnit y moodle-plugin-ci sobre Moodle 4.5 en el CI, que debe pasar sin fallos. | Compatibilidad | Pendiente |

## Requerimientos de Sistema

| ID | Descripción |
|---|---|
| RS-001 | |