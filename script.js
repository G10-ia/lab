document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // OCULTAR MIENTRAS REVISA SESION
  // =========================
  document.body.style.visibility = "hidden";

  function mostrarBody() {
    document.body.style.visibility = "visible";
  }

  // =========================
  // SUPABASE
  // =========================
  const SUPABASE_URL = "https://ekxchwqhdovufwoqxszh.supabase.co";
  const SUPABASE_ANON_KEY = "sb_publishable_RMAdj7ndWYfGSk1H29orHA_o1UveTir";

  const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );

  // =========================
  // LOGIN
  // =========================
  const pantallaLogin = document.getElementById("pantallaLogin");
  const appReal = document.getElementById("appReal");
  const usuarioLogin = document.getElementById("usuarioLogin");
  const claveLogin = document.getElementById("claveLogin");
  const btnIngresar = document.getElementById("btnIngresar");
  const btnAbrirSolicitud = document.getElementById("btnAbrirSolicitud");
  const mensajeLogin = document.getElementById("mensajeLogin");
  const modalSolicitudAcceso = document.getElementById("modalSolicitudAcceso");
  const cerrarModalSolicitudBackdrop = document.getElementById("cerrarModalSolicitudBackdrop");
  const btnCancelarSolicitud = document.getElementById("btnCancelarSolicitud");
  const btnEnviarSolicitud = document.getElementById("btnEnviarSolicitud");
  const usuarioSolicitud = document.getElementById("usuarioSolicitud");
  const claveSolicitud = document.getElementById("claveSolicitud");
  const nombreCompletoSolicitud = document.getElementById("nombreCompletoSolicitud");
  const mensajeSolicitud = document.getElementById("mensajeSolicitud");
  const accionesSolicitudExito = document.getElementById("accionesSolicitudExito");
  const btnEntendidoSolicitud = document.getElementById("btnEntendidoSolicitud");
  const usuarioActivo = document.getElementById("usuarioActivo");
  const cerrarSesion = document.getElementById("cerrarSesion");
  const menuAdmin = document.getElementById("menuAdmin");
  const btnMenuRegistro = document.getElementById("btnMenuRegistro");
  const btnMenuHistorial = document.getElementById("btnMenuHistorial");
  const btnMenuUsuarios = document.getElementById("btnMenuUsuarios");
  const btnMenuActividad = document.getElementById("btnMenuActividad");
  const seccionRegistro = document.getElementById("seccionRegistro");
  const btnVolverMenuDesdeRegistro = document.getElementById("btnVolverMenuDesdeRegistro");
  const btnVolverMenuDesdeHistorial = document.getElementById("btnVolverMenuDesdeHistorial");
  const btnVolverMenuDesdeUsuarios = document.getElementById("btnVolverMenuDesdeUsuarios");
  const btnVolverMenuDesdeActividad = document.getElementById("btnVolverMenuDesdeActividad");
  const envolturaBotonVolverRegistro = document.getElementById("envolturaBotonVolverRegistro");
  const envolturaBotonVolverHistorial = document.getElementById("envolturaBotonVolverHistorial");
  const envolturaBotonVolverUsuarios = document.getElementById("envolturaBotonVolverUsuarios");
  const envolturaBotonVolverActividad = document.getElementById("envolturaBotonVolverActividad");

  // =========================
  // OJO CONTRASENA
  // =========================
  const toggleClave = document.getElementById("toggleClave");
  const iconoOjoAbierto = document.getElementById("iconoOjoAbierto");
  const iconoOjoCerrado = document.getElementById("iconoOjoCerrado");

  // =========================
  // PANEL ADMIN HISTORIAL
  // =========================
  const panelAdmin = document.getElementById("panelAdmin");
  const historialAdmin = document.getElementById("historialAdmin");
  const btnRecargarHistorial = document.getElementById("btnRecargarHistorial");
  const paginacionAdmin = document.getElementById("paginacionAdmin");
  const btnPaginaAnterior = document.getElementById("btnPaginaAnterior");
  const btnPaginaSiguiente = document.getElementById("btnPaginaSiguiente");
  const infoPaginaAdmin = document.getElementById("infoPaginaAdmin");

  // =========================
  // FILTROS ADMIN HISTORIAL
  // =========================
  const filtroUsuarioAdmin = document.getElementById("filtroUsuarioAdmin");
  const filtroFechaDesdeAdmin = document.getElementById("filtroFechaDesdeAdmin");
  const filtroFechaHastaAdmin = document.getElementById("filtroFechaHastaAdmin");
  const btnLimpiarFiltrosAdmin = document.getElementById("btnLimpiarFiltrosAdmin");

  // Compatibilidad por si existe el input antiguo
  const filtroFechaAdmin = document.getElementById("filtroFechaAdmin");

  // =========================
  // PANEL ADMIN USUARIOS
  // =========================
  const panelUsuariosAdmin = document.getElementById("panelUsuariosAdmin");
  const btnRecargarUsuariosAdmin = document.getElementById("btnRecargarUsuariosAdmin");
  const filtroUsuarioPanelAdmin = document.getElementById("filtroUsuarioPanelAdmin");
  const btnLimpiarUsuariosAdmin = document.getElementById("btnLimpiarUsuariosAdmin");
  const resumenUsuariosAdmin = document.getElementById("resumenUsuariosAdmin");
  const listaUsuariosAdmin = document.getElementById("listaUsuariosAdmin");
  let paginacionUsuariosAdmin = document.getElementById("paginacionUsuariosAdmin");
  let btnPaginaAnteriorUsuarios = document.getElementById("btnPaginaAnteriorUsuarios");
  let btnPaginaSiguienteUsuarios = document.getElementById("btnPaginaSiguienteUsuarios");
  let infoPaginaUsuariosAdmin = document.getElementById("infoPaginaUsuariosAdmin");
  const btnRecargarSolicitudesAdmin = document.getElementById("btnRecargarSolicitudesAdmin");
  const resumenSolicitudesAdmin = document.getElementById("resumenSolicitudesAdmin");
  const listaSolicitudesAdmin = document.getElementById("listaSolicitudesAdmin");

  const panelActividadAdmin = document.getElementById("panelActividadAdmin");
  const btnRecargarActividadAdmin = document.getElementById("btnRecargarActividadAdmin");
  const resumenActividadAdmin = document.getElementById("resumenActividadAdmin");
  const listaActividadAdmin = document.getElementById("listaActividadAdmin");
  let filtroFechaDesdeActividadAdmin = document.getElementById("filtroFechaDesdeActividadAdmin");
  let filtroFechaHastaActividadAdmin = document.getElementById("filtroFechaHastaActividadAdmin");
  let btnLimpiarActividadAdmin = document.getElementById("btnLimpiarActividadAdmin");

  // =========================
  // RESUMEN HISTORIAL
  // =========================
  let resumenHistorialAdmin = document.getElementById("resumenHistorialAdmin");

  if (!resumenHistorialAdmin && panelAdmin && historialAdmin) {
    resumenHistorialAdmin = document.createElement("div");
    resumenHistorialAdmin.id = "resumenHistorialAdmin";
    resumenHistorialAdmin.style.marginBottom = "12px";
    resumenHistorialAdmin.style.padding = "10px 12px";
    resumenHistorialAdmin.style.border = "1px solid #d9d9d9";
    resumenHistorialAdmin.style.borderRadius = "10px";
    resumenHistorialAdmin.style.background = "#f7f9fc";
    resumenHistorialAdmin.style.fontSize = "14px";
    resumenHistorialAdmin.style.fontWeight = "700";
    resumenHistorialAdmin.style.color = "#1f2d3d";
    resumenHistorialAdmin.textContent = "Mostrando 0 de 0 registros";
    panelAdmin.insertBefore(resumenHistorialAdmin, historialAdmin);
  }

  if (!paginacionUsuariosAdmin && panelUsuariosAdmin && listaUsuariosAdmin) {
    paginacionUsuariosAdmin = document.createElement("div");
    paginacionUsuariosAdmin.id = "paginacionUsuariosAdmin";
    paginacionUsuariosAdmin.style.display = "none";
    paginacionUsuariosAdmin.style.marginTop = "14px";
    paginacionUsuariosAdmin.style.gap = "10px";
    paginacionUsuariosAdmin.style.alignItems = "center";
    paginacionUsuariosAdmin.style.justifyContent = "center";
    paginacionUsuariosAdmin.style.flexWrap = "wrap";

    btnPaginaAnteriorUsuarios = document.createElement("button");
    btnPaginaAnteriorUsuarios.id = "btnPaginaAnteriorUsuarios";
    btnPaginaAnteriorUsuarios.type = "button";
    btnPaginaAnteriorUsuarios.textContent = "Anterior";
    btnPaginaAnteriorUsuarios.style.background = "#4b79bb";
    btnPaginaAnteriorUsuarios.style.color = "#fff";
    btnPaginaAnteriorUsuarios.style.border = "none";
    btnPaginaAnteriorUsuarios.style.borderRadius = "8px";
    btnPaginaAnteriorUsuarios.style.padding = "10px 14px";
    btnPaginaAnteriorUsuarios.style.cursor = "pointer";

    infoPaginaUsuariosAdmin = document.createElement("span");
    infoPaginaUsuariosAdmin.id = "infoPaginaUsuariosAdmin";
    infoPaginaUsuariosAdmin.style.fontWeight = "700";
    infoPaginaUsuariosAdmin.style.fontSize = "14px";
    infoPaginaUsuariosAdmin.textContent = "Pagina 1 de 1";

    btnPaginaSiguienteUsuarios = document.createElement("button");
    btnPaginaSiguienteUsuarios.id = "btnPaginaSiguienteUsuarios";
    btnPaginaSiguienteUsuarios.type = "button";
    btnPaginaSiguienteUsuarios.textContent = "Siguiente";
    btnPaginaSiguienteUsuarios.style.background = "#4b79bb";
    btnPaginaSiguienteUsuarios.style.color = "#fff";
    btnPaginaSiguienteUsuarios.style.border = "none";
    btnPaginaSiguienteUsuarios.style.borderRadius = "8px";
    btnPaginaSiguienteUsuarios.style.padding = "10px 14px";
    btnPaginaSiguienteUsuarios.style.cursor = "pointer";

    paginacionUsuariosAdmin.appendChild(btnPaginaAnteriorUsuarios);
    paginacionUsuariosAdmin.appendChild(infoPaginaUsuariosAdmin);
    paginacionUsuariosAdmin.appendChild(btnPaginaSiguienteUsuarios);
    panelUsuariosAdmin.appendChild(paginacionUsuariosAdmin);
  }

  if (panelActividadAdmin && !filtroFechaDesdeActividadAdmin && btnRecargarActividadAdmin && resumenActividadAdmin) {
    const contenedorFiltros = document.createElement("div");
    contenedorFiltros.id = "filtrosActividadAdmin";
    contenedorFiltros.style.display = "grid";
    contenedorFiltros.style.gridTemplateColumns = "1fr 1fr";
    contenedorFiltros.style.gap = "10px";
    contenedorFiltros.style.marginBottom = "14px";

    const wrapDesde = document.createElement("div");
    wrapDesde.className = "campo";
    wrapDesde.style.margin = "0";
    wrapDesde.innerHTML = `
      <label for="filtroFechaDesdeActividadAdmin">Fecha desde</label>
      <div class="input-icono input-select">
        <input type="date" id="filtroFechaDesdeActividadAdmin">
      </div>
    `;

    const wrapHasta = document.createElement("div");
    wrapHasta.className = "campo";
    wrapHasta.style.margin = "0";
    wrapHasta.innerHTML = `
      <label for="filtroFechaHastaActividadAdmin">Fecha hasta</label>
      <div class="input-icono input-select">
        <input type="date" id="filtroFechaHastaActividadAdmin">
      </div>
    `;

    const wrapBoton = document.createElement("div");
    wrapBoton.className = "campo";
    wrapBoton.style.margin = "0";
    wrapBoton.style.gridColumn = "1 / -1";
    wrapBoton.innerHTML = '<button id="btnLimpiarActividadAdmin" type="button" style="width:100%; background:#eef3fb; color:#315b98; border:1px solid #cfdced; box-shadow:none;">Limpiar filtro de fechas</button>';

    contenedorFiltros.appendChild(wrapDesde);
    contenedorFiltros.appendChild(wrapHasta);
    contenedorFiltros.appendChild(wrapBoton);

    btnRecargarActividadAdmin.insertAdjacentElement("afterend", contenedorFiltros);

    filtroFechaDesdeActividadAdmin = document.getElementById("filtroFechaDesdeActividadAdmin");
    filtroFechaHastaActividadAdmin = document.getElementById("filtroFechaHastaActividadAdmin");
    btnLimpiarActividadAdmin = document.getElementById("btnLimpiarActividadAdmin");
  }

  // =========================
  // CIERRE AUTOMATICO FIJO
  // =========================
  const DURACION_SESION_MS = 5 * 60 * 1000;
  let temporizadorSesion = null;

  // =========================
  // ESTADO GLOBAL
  // =========================
  let perfilActual = null;
  let esAdminActual = false;
  let cargandoHistorialAdmin = false;
  let cargandoUsuariosAdmin = false;
  let cargandoSolicitudesAdmin = false;
  let cargandoActividadAdmin = false;

  // =========================
  // HISTORIAL CACHE
  // =========================
  const REGISTROS_POR_PAGINA = 5;
  let registrosAdminOriginalCache = [];
  let registrosAdminCache = [];
  let paginaActualAdmin = 1;

  // =========================
  // USUARIOS CACHE
  // =========================
  const USUARIOS_POR_PAGINA = 5;
  let usuariosAdminOriginalCache = [];
  let usuariosAdminCache = [];
  let paginaActualUsuariosAdmin = 1;
  let solicitudesAdminCache = [];
  let actividadAdminCache = [];
  let detalleActividadExpandidoUserId = null;
  let historialActividadCache = {};
  let ordenActividadDetalleCache = {};

  // =========================
  // INSTALACION / DISPOSITIVO
  // =========================
  const STORAGE_KEY_INSTALLATION_ID = "sutran_installation_id";

  function limpiarTemporizadorSesion() {
    if (temporizadorSesion) {
      clearTimeout(temporizadorSesion);
      temporizadorSesion = null;
    }
  }

  function normalizarUsuarioSolicitud(valor) {
    return String(valor || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
  }

  function limpiarFormularioSolicitud() {
    if (usuarioSolicitud) usuarioSolicitud.value = "";
    if (claveSolicitud) claveSolicitud.value = "";
    if (nombreCompletoSolicitud) nombreCompletoSolicitud.value = "";
    if (mensajeSolicitud) {
      mensajeSolicitud.textContent = "";
      mensajeSolicitud.classList.remove("mensaje-solicitud-exito");
      mensajeSolicitud.classList.remove("mensaje-solicitud-error");
    }
    if (btnEnviarSolicitud) {
      btnEnviarSolicitud.disabled = false;
      btnEnviarSolicitud.style.display = "";
    }
    if (btnCancelarSolicitud) {
      btnCancelarSolicitud.disabled = false;
      btnCancelarSolicitud.style.display = "";
      btnCancelarSolicitud.textContent = "Cancelar";
    }
    if (accionesSolicitudExito) accionesSolicitudExito.style.display = "none";
  }

  function abrirModalSolicitud() {
    if (!modalSolicitudAcceso) return;
    limpiarFormularioSolicitud();
    modalSolicitudAcceso.style.display = "flex";
    document.body.classList.add("modal-abierto");
    if (usuarioSolicitud) usuarioSolicitud.focus();
  }

  function cerrarModalSolicitud() {
    if (!modalSolicitudAcceso) return;
    modalSolicitudAcceso.style.display = "none";
    document.body.classList.remove("modal-abierto");
  }

  function actualizarResumenSolicitudes(totalSolicitudes) {
    if (!resumenSolicitudesAdmin) return;
    resumenSolicitudesAdmin.textContent = `Mostrando ${totalSolicitudes || 0} solicitudes`;
  }

  function actualizarResumenActividad(totalActividad) {
    if (!resumenActividadAdmin) return;
    resumenActividadAdmin.textContent = `Mostrando ${totalActividad || 0} registros de actividad`;
  }

  if (toggleClave && claveLogin && iconoOjoAbierto && iconoOjoCerrado) {
    toggleClave.addEventListener("click", () => {
      const mostrando = claveLogin.type === "text";

      if (mostrando) {
        claveLogin.type = "password";
        iconoOjoAbierto.classList.remove("oculto");
        iconoOjoCerrado.classList.add("oculto");
        toggleClave.setAttribute("aria-label", "Mostrar contrasena");
        toggleClave.setAttribute("aria-pressed", "false");
      } else {
        claveLogin.type = "text";
        iconoOjoAbierto.classList.add("oculto");
        iconoOjoCerrado.classList.remove("oculto");
        toggleClave.setAttribute("aria-label", "Ocultar contrasena");
        toggleClave.setAttribute("aria-pressed", "true");
      }
    });
  }

  function ocultarTodosLosBotonesVolver() {
    [envolturaBotonVolverRegistro, envolturaBotonVolverHistorial, envolturaBotonVolverUsuarios, envolturaBotonVolverActividad].forEach((item) => {
      if (!item) return;
      item.style.display = "none";
      item.style.pointerEvents = "none";
      item.style.opacity = "1";
    });
  }

  function mostrarMenuAdmin() {
    document.body.classList.remove("con-boton-volver");
    if (menuAdmin) menuAdmin.style.display = "block";
    if (seccionRegistro) seccionRegistro.style.display = "none";
    if (panelAdmin) panelAdmin.style.display = "none";
    if (panelUsuariosAdmin) panelUsuariosAdmin.style.display = "none";
    if (panelActividadAdmin) panelActividadAdmin.style.display = "none";
    ocultarTodosLosBotonesVolver();
  }

  function abrirSeccionAdmin(seccion) {
    document.body.classList.add("con-boton-volver");
    if (menuAdmin) menuAdmin.style.display = "none";

    if (seccionRegistro) {
      seccionRegistro.style.display = seccion === "registro" ? "block" : "none";
    }

    if (panelAdmin) {
      panelAdmin.style.display = seccion === "historial" ? "block" : "none";
    }

    if (panelUsuariosAdmin) {
      panelUsuariosAdmin.style.display = seccion === "usuarios" ? "block" : "none";
    }

    if (panelActividadAdmin) {
      panelActividadAdmin.style.display = seccion === "actividad" ? "block" : "none";
    }

    ocultarTodosLosBotonesVolver();

    if (seccion === "registro" && envolturaBotonVolverRegistro) {
      envolturaBotonVolverRegistro.style.display = "block";
      envolturaBotonVolverRegistro.style.pointerEvents = "auto";
    }

    if (seccion === "historial" && envolturaBotonVolverHistorial) {
      envolturaBotonVolverHistorial.style.display = "block";
      envolturaBotonVolverHistorial.style.pointerEvents = "auto";
    }

    if (seccion === "usuarios" && envolturaBotonVolverUsuarios) {
      envolturaBotonVolverUsuarios.style.display = "block";
      envolturaBotonVolverUsuarios.style.pointerEvents = "auto";
    }

    if (seccion === "actividad" && envolturaBotonVolverActividad) {
      envolturaBotonVolverActividad.style.display = "block";
      envolturaBotonVolverActividad.style.pointerEvents = "auto";
    }
  }

  function configurarVistaAdminInicial() {
    if (esAdminActual) {
      mostrarMenuAdmin();
    } else {
      document.body.classList.remove("con-boton-volver");
      if (menuAdmin) menuAdmin.style.display = "none";
      if (seccionRegistro) seccionRegistro.style.display = "block";
      if (panelAdmin) panelAdmin.style.display = "none";
      if (panelUsuariosAdmin) panelUsuariosAdmin.style.display = "none";
      if (panelActividadAdmin) panelActividadAdmin.style.display = "none";
      ocultarTodosLosBotonesVolver();
    }
  }

  function mostrarApp(usuario) {
    if (pantallaLogin) pantallaLogin.style.display = "none";
    if (appReal) appReal.style.display = "block";
    if (usuarioActivo) usuarioActivo.textContent = usuario || "-";
  }

  function mostrarLogin() {
    if (pantallaLogin) pantallaLogin.style.display = "flex";
    if (appReal) appReal.style.display = "none";
  }

  function limpiarCamposLogin() {
    if (usuarioLogin) usuarioLogin.value = "";
    if (claveLogin) claveLogin.value = "";
  }

  function resetearOjoPassword() {
    if (claveLogin && iconoOjoAbierto && iconoOjoCerrado && toggleClave) {
      claveLogin.type = "password";
      iconoOjoAbierto.classList.remove("oculto");
      iconoOjoCerrado.classList.add("oculto");
      toggleClave.setAttribute("aria-label", "Mostrar contrasena");
      toggleClave.setAttribute("aria-pressed", "false");
    }
  }

  function construirEmailDesdeUsuario(usuario) {
    return `${usuario.toLowerCase()}@sutran.com`;
  }

  function generarInstallationId() {
    const base = `inst_${Date.now()}_${Math.random().toString(36).slice(2, 12)}`;

    if (window.crypto && typeof window.crypto.randomUUID === "function") {
      return `inst_${window.crypto.randomUUID()}`;
    }

    return base;
  }

  function obtenerInstallationIdLocal() {
    try {
      let installationId = localStorage.getItem(STORAGE_KEY_INSTALLATION_ID);

      if (!installationId) {
        installationId = generarInstallationId();
        localStorage.setItem(STORAGE_KEY_INSTALLATION_ID, installationId);
      }

      return installationId;
    } catch (error) {
      console.error("No se pudo obtener installation_id local:", error);
      return null;
    }
  }

  function obtenerDeviceInfo() {
    try {
      const partes = [];
      const ua = navigator.userAgent || "";
      const plataforma = navigator.platform || "";
      const idioma = navigator.language || "";

      if (plataforma) partes.push(plataforma);
      if (idioma) partes.push(idioma);
      if (ua) partes.push(ua);

      return partes.join(" | ").slice(0, 500);
    } catch (error) {
      console.error("No se pudo obtener device_info:", error);
      return "";
    }
  }

  function interpretarErrorIndiceInstalacion(error) {
    const mensaje = textoErrorSupabase(error).toLowerCase();

    return (
      mensaje.includes("duplicate key") ||
      mensaje.includes("unique") ||
      mensaje.includes("idx_instalacion_unica_activa")
    );
  }

  function extraerInstalacionActivaDeLista(lista) {
    const items = Array.isArray(lista) ? lista : [];
    return items.find((item) => item && item.activo === true) || null;
  }

  async function obtenerInstalacionActivaPorUsuario(userId) {
    const { data, error } = await supabase
      .from("instalaciones_usuario")
      .select("id, user_id, installation_id, device_info, activo, created_at, updated_at, desenlazado_at, desenlazado_por")
      .eq("user_id", userId)
      .eq("activo", true);

    return {
      data: extraerInstalacionActivaDeLista(data),
      error
    };
  }

  async function validarInstalacionUsuario(userId, opciones = {}) {
    const installationId = obtenerInstallationIdLocal();

    if (!installationId) {
      return {
        ok: false,
        codigo: "local_installation_error",
        mensaje: "No se pudo generar el identificador del dispositivo"
      };
    }

    const deviceInfo = obtenerDeviceInfo();

    const { data: instalacionActual, error: errorConsulta } = await obtenerInstalacionActivaPorUsuario(userId);

    if (errorConsulta) {
      console.error("Error consultando instalacion activa:", errorConsulta);
      return {
        ok: false,
        codigo: "consulta_error",
        mensaje: "No se pudo validar el dispositivo"
      };
    }

    if (!instalacionActual) {
      const { data: insertData, error: errorInsert } = await supabase
        .from("instalaciones_usuario")
        .insert([
          {
            user_id: userId,
            installation_id: installationId,
            device_info: deviceInfo,
            activo: true
          }
        ])
        .select("id, user_id, installation_id, device_info, activo")
        .maybeSingle();

      if (!errorInsert && insertData) {
        return {
          ok: true,
          installationId,
          instalacion: insertData,
          recienVinculada: true
        };
      }

      if (interpretarErrorIndiceInstalacion(errorInsert)) {
        const { data: reconsulta, error: errorReconsulta } = await obtenerInstalacionActivaPorUsuario(userId);

        if (errorReconsulta) {
          console.error("Error reconsultando instalacion:", errorReconsulta);
          return {
            ok: false,
            codigo: "consulta_error",
            mensaje: "No se pudo validar el dispositivo"
          };
        }

        if (reconsulta && reconsulta.installation_id === installationId) {
          return {
            ok: true,
            installationId,
            instalacion: reconsulta,
            recienVinculada: false
          };
        }

        return {
          ok: false,
          codigo: "otro_dispositivo",
          mensaje: "Este usuario ya esta vinculado a otro dispositivo. Contacte al administrador."
        };
      }

      console.error("Error insertando instalacion:", errorInsert);
      return {
        ok: false,
        codigo: "insert_error",
        mensaje: "No se pudo registrar el dispositivo"
      };
    }

    if (instalacionActual.installation_id === installationId) {
      const payloadUpdate = {};

      if ((instalacionActual.device_info || "") !== deviceInfo) {
        payloadUpdate.device_info = deviceInfo;
      }

      if (Object.keys(payloadUpdate).length > 0) {
        const { error: errorUpdate } = await supabase
          .from("instalaciones_usuario")
          .update(payloadUpdate)
          .eq("id", instalacionActual.id);

        if (errorUpdate) {
          console.error("Error actualizando device_info:", errorUpdate);
        }
      }

      return {
        ok: true,
        installationId,
        instalacion: instalacionActual,
        recienVinculada: false
      };
    }

    return {
      ok: false,
      codigo: "otro_dispositivo",
      mensaje: "Este usuario ya esta vinculado a otro dispositivo. Contacte al administrador."
    };
  }

  function actualizarResumenHistorial(totalRegistros, inicioMostrado = 0, finMostrado = 0) {
    if (!resumenHistorialAdmin) return;

    if (!totalRegistros || totalRegistros <= 0) {
      resumenHistorialAdmin.textContent = "Mostrando 0 de 0 registros";
      return;
    }

    resumenHistorialAdmin.textContent = `Mostrando ${inicioMostrado} a ${finMostrado} de ${totalRegistros} registros`;
  }

  function actualizarResumenUsuarios(totalUsuarios, inicioMostrado = 0, finMostrado = 0) {
    if (!resumenUsuariosAdmin) return;

    if (!totalUsuarios || totalUsuarios <= 0) {
      resumenUsuariosAdmin.textContent = "Mostrando 0 de 0 usuarios";
      return;
    }

    resumenUsuariosAdmin.textContent = `Mostrando ${inicioMostrado} a ${finMostrado} de ${totalUsuarios} usuarios`;
  }

  function ocultarPaginacionAdmin() {
    if (paginacionAdmin) {
      paginacionAdmin.style.display = "none";
    }

    if (infoPaginaAdmin) {
      infoPaginaAdmin.textContent = "Pagina 1 de 1";
    }

    if (btnPaginaAnterior) {
      btnPaginaAnterior.disabled = true;
      btnPaginaAnterior.style.opacity = "0.6";
      btnPaginaAnterior.style.cursor = "not-allowed";
    }

    if (btnPaginaSiguiente) {
      btnPaginaSiguiente.disabled = true;
      btnPaginaSiguiente.style.opacity = "0.6";
      btnPaginaSiguiente.style.cursor = "not-allowed";
    }
  }

  function mostrarPaginacionAdmin() {
    if (paginacionAdmin) {
      paginacionAdmin.style.display = "flex";
    }
  }

  function ocultarPaginacionUsuariosAdmin() {
    if (paginacionUsuariosAdmin) {
      paginacionUsuariosAdmin.style.display = "none";
    }

    if (infoPaginaUsuariosAdmin) {
      infoPaginaUsuariosAdmin.textContent = "Pagina 1 de 1";
    }

    if (btnPaginaAnteriorUsuarios) {
      btnPaginaAnteriorUsuarios.disabled = true;
      btnPaginaAnteriorUsuarios.style.opacity = "0.6";
      btnPaginaAnteriorUsuarios.style.cursor = "not-allowed";
    }

    if (btnPaginaSiguienteUsuarios) {
      btnPaginaSiguienteUsuarios.disabled = true;
      btnPaginaSiguienteUsuarios.style.opacity = "0.6";
      btnPaginaSiguienteUsuarios.style.cursor = "not-allowed";
    }
  }

  function mostrarPaginacionUsuariosAdmin() {
    if (paginacionUsuariosAdmin) {
      paginacionUsuariosAdmin.style.display = "flex";
    }
  }

  function limpiarFiltrosAdminUI() {
    if (filtroUsuarioAdmin) filtroUsuarioAdmin.value = "";
    if (filtroFechaDesdeAdmin) filtroFechaDesdeAdmin.value = "";
    if (filtroFechaHastaAdmin) filtroFechaHastaAdmin.value = "";
    if (filtroFechaAdmin) filtroFechaAdmin.value = "";
  }

  function limpiarBusquedaUsuariosAdminUI() {
    if (filtroUsuarioPanelAdmin) filtroUsuarioPanelAdmin.value = "";
  }

  function ocultarPanelAdmin() {
    document.body.classList.remove("con-boton-volver");
    if (menuAdmin) menuAdmin.style.display = "none";
    if (panelAdmin) panelAdmin.style.display = "none";
    if (panelUsuariosAdmin) panelUsuariosAdmin.style.display = "none";
    if (panelActividadAdmin) panelActividadAdmin.style.display = "none";
    if (seccionRegistro) seccionRegistro.style.display = "block";
    if (envolturaBotonVolverRegistro) envolturaBotonVolverRegistro.style.display = "none";

    if (historialAdmin) historialAdmin.innerHTML = "";
    if (listaUsuariosAdmin) listaUsuariosAdmin.innerHTML = "";
    if (listaActividadAdmin) listaActividadAdmin.innerHTML = "";

    limpiarFiltrosAdminUI();
    limpiarBusquedaUsuariosAdminUI();

    registrosAdminOriginalCache = [];
    registrosAdminCache = [];
    usuariosAdminOriginalCache = [];
    usuariosAdminCache = [];
    actividadAdminCache = [];
    detalleActividadExpandidoUserId = null;
    historialActividadCache = {};
    ordenActividadDetalleCache = {};
    if (filtroFechaDesdeActividadAdmin) filtroFechaDesdeActividadAdmin.value = '';
    if (filtroFechaHastaActividadAdmin) filtroFechaHastaActividadAdmin.value = '';
    paginaActualAdmin = 1;
    paginaActualUsuariosAdmin = 1;

    actualizarResumenHistorial(0, 0, 0);
    actualizarResumenUsuarios(0, 0, 0);
    actualizarResumenActividad(0);
    ocultarPaginacionAdmin();
    ocultarPaginacionUsuariosAdmin();
  }

  function mostrarPanelAdmin() {
    document.body.classList.remove("con-boton-volver");
    if (menuAdmin) menuAdmin.style.display = "block";
    if (panelAdmin) panelAdmin.style.display = "none";
    if (panelUsuariosAdmin) panelUsuariosAdmin.style.display = "none";
    if (panelActividadAdmin) panelActividadAdmin.style.display = "none";
    if (seccionRegistro) seccionRegistro.style.display = "none";
    if (envolturaBotonVolverRegistro) envolturaBotonVolverRegistro.style.display = "none";
  }

  async function obtenerPerfilPorId(userId) {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, usuario, activo, rol")
      .eq("id", userId)
      .maybeSingle();

    return { data, error };
  }

  async function registrarIngresoActividad(userId, nombreUsuario) {
    if (!userId) return false;

    try {
      const ahora = new Date();
      const anio = ahora.getFullYear();
      const mes = String(ahora.getMonth() + 1).padStart(2, "0");
      const dia = String(ahora.getDate()).padStart(2, "0");
      const horas = String(ahora.getHours()).padStart(2, "0");
      const minutos = String(ahora.getMinutes()).padStart(2, "0");
      const segundos = String(ahora.getSeconds()).padStart(2, "0");

      const fechaIngreso = `${anio}-${mes}-${dia}`;
      const horaIngreso = `${horas}:${minutos}:${segundos}`;
      const fechaHoraIngreso = ahora.toISOString();

      const { data: actividadExistente, error: errorConsultaActividad } = await supabase
        .from("actividad_sistema")
        .select("user_id, contador_ingresos")
        .eq("user_id", userId)
        .maybeSingle();

      if (errorConsultaActividad) {
        console.error("Error consultando actividad del sistema:", errorConsultaActividad);
        return false;
      }

      const nuevoContador = actividadExistente
        ? Number(actividadExistente.contador_ingresos || 0) + 1
        : 1;

      if (actividadExistente) {
        const { error: errorUpdateActividad } = await supabase
          .from("actividad_sistema")
          .update({
            usuario: nombreUsuario || "",
            fecha_ingreso: fechaIngreso,
            hora_ingreso: horaIngreso,
            ultima_conexion: fechaHoraIngreso,
            contador_ingresos: nuevoContador
          })
          .eq("user_id", userId);

        if (errorUpdateActividad) {
          console.error("Error actualizando actividad del sistema:", errorUpdateActividad);
          return false;
        }
      } else {
        const { error: errorInsertActividad } = await supabase
          .from("actividad_sistema")
          .insert([
            {
              user_id: userId,
              usuario: nombreUsuario || "",
              fecha_ingreso: fechaIngreso,
              hora_ingreso: horaIngreso,
              ultima_conexion: fechaHoraIngreso,
              contador_ingresos: 1
            }
          ]);

        if (errorInsertActividad) {
          console.error("Error insertando actividad del sistema:", errorInsertActividad);
          return false;
        }
      }

      const payloadHistorial = {
        user_id: userId,
        usuario: nombreUsuario || "",
        fecha_hora_ingreso: fechaHoraIngreso
      };

      const { data: historialInsertado, error: errorInsertHistorial } = await supabase
        .from("actividad_sistema_historial")
        .insert([payloadHistorial])
        .select("id, user_id, usuario, fecha_hora_ingreso")
        .maybeSingle();

      if (errorInsertHistorial) {
        console.error("Error insertando historial de actividad:", errorInsertHistorial);
      } else if (Array.isArray(historialActividadCache[userId])) {
        historialActividadCache[userId] = historialInsertado
          ? [historialInsertado, ...historialActividadCache[userId]]
          : [
              {
                id: `temp_${Date.now()}`,
                user_id: userId,
                usuario: nombreUsuario || "",
                fecha_hora_ingreso: fechaHoraIngreso
              },
              ...historialActividadCache[userId]
            ];
      }

      const indiceActividad = actividadAdminCache.findIndex((item) => item && item.user_id === userId);

      if (indiceActividad >= 0) {
        actividadAdminCache[indiceActividad] = {
          ...actividadAdminCache[indiceActividad],
          usuario: nombreUsuario || actividadAdminCache[indiceActividad].usuario || "-",
          fecha_ingreso: fechaIngreso,
          hora_ingreso: horaIngreso,
          ultima_conexion: fechaHoraIngreso,
          contador_ingresos: nuevoContador
        };
      }

      return true;
    } catch (error) {
      console.error("Error general registrando ingreso de actividad:", error);
      return false;
    }
  }

  // =========================
  // FECHA Y HORA AUTOMATICAS
  // =========================
  const fechaInput = document.getElementById("fecha");
  const horaInput = document.getElementById("hora");

  function ponerFechaHoraActual() {
    if (!fechaInput || !horaInput) return;

    const ahora = new Date();

    const ano = ahora.getFullYear();
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const dia = String(ahora.getDate()).padStart(2, "0");
    fechaInput.value = `${ano}-${mes}-${dia}`;

    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");
    horaInput.value = `${horas}:${minutos}:${segundos}`;
  }

  if (fechaInput && horaInput) {
    horaInput.setAttribute("lang", "fr-CA");
    horaInput.setAttribute("inputmode", "numeric");
    horaInput.setAttribute("autocomplete", "off");
    ponerFechaHoraActual();
  }

  // =========================
  // ELEMENTOS APP
  // =========================
  const inputFoto = document.getElementById("foto");
  const inputCoordenadas = document.getElementById("coordenadas");
  const inputFecha = document.getElementById("fecha");
  const opcionCamper = document.getElementById("opcionCamper");
  const opcionMovilBus = document.getElementById("opcionMovilBus");
  const opcionGrupoAla = document.getElementById("opcionGrupoAla");
  const inputHora = document.getElementById("hora");
  const inputUbicacion = document.getElementById("ubicacion");
  const botonGenerar = document.getElementById("generar");
  const botonDescargar = document.getElementById("descargar");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const nombreArchivo = document.getElementById("nombreArchivo");

  const TEXT_SIZE = 14;

  // =========================
  // VALORES INICIALES DEL FORMULARIO
  // =========================
  const VALOR_INICIAL_COORDENADAS = inputCoordenadas ? inputCoordenadas.value : "";
  const VALOR_INICIAL_UBICACION = inputUbicacion ? inputUbicacion.value : "";
  const TEXTO_INICIAL_NOMBRE_ARCHIVO = nombreArchivo ? nombreArchivo.textContent : "Sin archivos seleccionados";

  const OPCIONES_UNIDAD = {
    camper: {
      coordenadas: "-6.4621941, -76.4250347",
      ubicacion: "SAN MARTIN-SAN MARTIN-LA BANDA DE SHILCAYO KM. 611 + 1257"
    },
    movil_bus: {
      coordenadas: "-6.4829357, -76.3768869",
      ubicacion: "SAN MARTIN-SAN MARTIN-MORALES KM. 604 + 362"
    },
    grupo_ala: {
      coordenadas: "-6.4904528, -76.3889726",
      ubicacion: "SAN MARTIN-SAN MARTIN-MORALES KM. 605 + 1227"
    }
  };

  // =========================
  // ESTADO GUARDADO SUPABASE
  // =========================
  let dataUrlGeneradaActual = null;
  let imagenListaParaGuardar = false;
  let guardandoEnSupabase = false;
  let ultimoStoragePathGuardado = null;
  let ultimaPublicUrlGuardada = null;

  function resetearEstadoImagenGenerada() {
    dataUrlGeneradaActual = null;
    imagenListaParaGuardar = false;
    guardandoEnSupabase = false;
    ultimoStoragePathGuardado = null;
    ultimaPublicUrlGuardada = null;

    if (botonDescargar) {
      botonDescargar.disabled = true;
      botonDescargar.style.background = "#9aa0a6";
    }
  }

  function dibujarPlaceholderCanvas() {
    if (!canvas || !ctx) return;

    canvas.width = 1080;
    canvas.height = 720;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 62px Arial, sans-serif";
    ctx.fillStyle = "#666";
    ctx.fillText(
      "Aqui se mostrara la imagen generada",
      canvas.width / 2,
      canvas.height / 2
    );
    ctx.restore();
  }

  function limpiarCanvas() {
    if (!canvas || !ctx) return;

    if (canvas.width > 0 && canvas.height > 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    dibujarPlaceholderCanvas();
  }

  function aplicarDatosUnidad(tipoUnidad) {
    const datos = OPCIONES_UNIDAD[tipoUnidad];

    if (!datos) return;

    if (inputCoordenadas) {
      inputCoordenadas.value = datos.coordenadas;
    }

    if (inputUbicacion) {
      inputUbicacion.value = datos.ubicacion;
    }
  }

  function obtenerTipoUnidadSeleccionada() {
    if (opcionMovilBus && opcionMovilBus.checked) return "movil_bus";
    if (opcionGrupoAla && opcionGrupoAla.checked) return "grupo_ala";
    return "camper";
  }

  function seleccionarUnidadPorTipo(tipoUnidad) {
    if (tipoUnidad === "movil_bus" && opcionMovilBus) {
      opcionMovilBus.checked = true;
    } else if (tipoUnidad === "grupo_ala" && opcionGrupoAla) {
      opcionGrupoAla.checked = true;
    } else if (opcionCamper) {
      opcionCamper.checked = true;
    }

    aplicarDatosUnidad(obtenerTipoUnidadSeleccionada());
  }

  function limpiarFormularioApp() {
    if (inputFoto) inputFoto.value = "";

    if (nombreArchivo) {
      nombreArchivo.textContent = TEXTO_INICIAL_NOMBRE_ARCHIVO || "Sin archivos seleccionados";
    }

    if (inputCoordenadas) {
      inputCoordenadas.value = VALOR_INICIAL_COORDENADAS || "";
    }

    if (inputUbicacion) {
      inputUbicacion.value = VALOR_INICIAL_UBICACION || "";
    }

    seleccionarUnidadPorTipo("camper");
    ponerFechaHoraActual();
    limpiarCanvas();
    resetearEstadoImagenGenerada();
  }

  async function ejecutarCierreAutomatico() {
    limpiarTemporizadorSesion();

    try {
      await supabase.auth.signOut();
    } catch (err) {}

    perfilActual = null;
    esAdminActual = false;

    localStorage.removeItem("usuarioLogeado");
    limpiarCamposLogin();
    resetearOjoPassword();
    ocultarPanelAdmin();
    limpiarFormularioApp();

    if (mensajeLogin) {
      mensajeLogin.textContent = "La sesion expiro despues de 5 minutos";
    }

    mostrarLogin();
    mostrarBody();
  }

  function iniciarTemporizadorSesion() {
    limpiarTemporizadorSesion();

    temporizadorSesion = setTimeout(() => {
      ejecutarCierreAutomatico();
    }, DURACION_SESION_MS);
  }

  async function revisarSesion() {
    try {
      if (mensajeLogin) mensajeLogin.textContent = "";

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        limpiarTemporizadorSesion();
        perfilActual = null;
        esAdminActual = false;
        ocultarPanelAdmin();
        limpiarFormularioApp();
        mostrarLogin();
        mostrarBody();
        return;
      }

      const session = data?.session;

      if (!session || !session.user) {
        limpiarTemporizadorSesion();
        perfilActual = null;
        esAdminActual = false;
        ocultarPanelAdmin();
        limpiarFormularioApp();
        mostrarLogin();
        mostrarBody();
        return;
      }

      const user = session.user;
      const { data: perfil, error: errorPerfil } = await obtenerPerfilPorId(user.id);

      if (errorPerfil) {
        console.error("Error al verificar perfil:", errorPerfil);
        limpiarTemporizadorSesion();
        perfilActual = null;
        esAdminActual = false;
        ocultarPanelAdmin();
        limpiarFormularioApp();
        if (mensajeLogin) mensajeLogin.textContent = "Error al verificar el perfil";
        mostrarLogin();
        mostrarBody();
        return;
      }

      if (!perfil) {
        limpiarTemporizadorSesion();
        perfilActual = null;
        esAdminActual = false;
        ocultarPanelAdmin();
        limpiarFormularioApp();
        if (mensajeLogin) mensajeLogin.textContent = "No se encontro el perfil del usuario";
        mostrarLogin();
        mostrarBody();
        return;
      }

      if (perfil.activo !== true) {
        limpiarTemporizadorSesion();
        perfilActual = null;
        esAdminActual = false;
        ocultarPanelAdmin();
        limpiarFormularioApp();
        if (mensajeLogin) mensajeLogin.textContent = "Usuario inactivo o bloqueado";
        await supabase.auth.signOut();
        mostrarLogin();
        mostrarBody();
        return;
      }

      const esAdminPerfil = (perfil.rol || "").toLowerCase() === "admin";

      if (!esAdminPerfil) {
        const validacionInstalacion = await validarInstalacionUsuario(user.id);

        if (!validacionInstalacion.ok) {
          limpiarTemporizadorSesion();
          perfilActual = null;
          esAdminActual = false;
          ocultarPanelAdmin();
          limpiarFormularioApp();
          if (mensajeLogin) mensajeLogin.textContent = validacionInstalacion.mensaje || "No se pudo validar el dispositivo";
          await supabase.auth.signOut();
          mostrarLogin();
          mostrarBody();
          return;
        }
      }

      perfilActual = perfil;
      esAdminActual = esAdminPerfil;

      if (!esAdminPerfil) {
        await registrarIngresoActividad(user.id, perfil.usuario || "");
      }

      localStorage.setItem("usuarioLogeado", perfil.usuario || "");
      mostrarApp(perfil.usuario || user.email || "");

      if (esAdminActual) {
        paginaActualAdmin = 1;
        configurarVistaAdminInicial();
        await cargarHistorialAdmin();
        await cargarUsuariosAdmin();
        await cargarSolicitudesAdmin();
        await cargarActividadAdmin();
      } else {
        ocultarPanelAdmin();
        configurarVistaAdminInicial();
      }

      iniciarTemporizadorSesion();
      mostrarBody();
    } catch (err) {
      console.error("Error general al revisar sesion:", err);
      limpiarTemporizadorSesion();
      perfilActual = null;
      esAdminActual = false;
      ocultarPanelAdmin();
      limpiarFormularioApp();
      if (mensajeLogin) mensajeLogin.textContent = "Error al revisar la sesion";
      mostrarLogin();
      mostrarBody();
    }
  }

  async function iniciarSesion(e) {
    if (e) e.preventDefault();

    const usuarioIngresado = usuarioLogin ? usuarioLogin.value.trim() : "";
    const claveIngresada = claveLogin ? claveLogin.value.trim() : "";

    if (!usuarioIngresado || !claveIngresada) {
      if (mensajeLogin) mensajeLogin.textContent = "Ingrese usuario y contrasena";
      return;
    }

    if (mensajeLogin) mensajeLogin.textContent = "Validando...";
    if (btnIngresar) btnIngresar.disabled = true;

    try {
      const emailTecnico = construirEmailDesdeUsuario(usuarioIngresado);

      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailTecnico,
        password: claveIngresada
      });

      if (error || !data || !data.user) {
        console.error("Error al iniciar sesion:", error);
        if (mensajeLogin) mensajeLogin.textContent = "Usuario o contrasena incorrectos";
        return;
      }

      const { data: perfil, error: errorPerfil } = await obtenerPerfilPorId(data.user.id);

      if (errorPerfil) {
        console.error("Error consultando perfil:", errorPerfil);
        if (mensajeLogin) mensajeLogin.textContent = "Error al consultar el perfil";
        return;
      }

      if (!perfil) {
        if (mensajeLogin) mensajeLogin.textContent = "No se encontro el perfil del usuario";
        return;
      }

      if (perfil.activo !== true) {
        await supabase.auth.signOut();
        if (mensajeLogin) mensajeLogin.textContent = "Usuario inactivo o bloqueado";
        return;
      }

      const esAdminPerfil = (perfil.rol || "").toLowerCase() === "admin";

      if (!esAdminPerfil) {
        const validacionInstalacion = await validarInstalacionUsuario(data.user.id);

        if (!validacionInstalacion.ok) {
          await supabase.auth.signOut();
          if (mensajeLogin) mensajeLogin.textContent = validacionInstalacion.mensaje || "No se pudo validar el dispositivo";
          return;
        }
      }

      perfilActual = perfil;
      esAdminActual = esAdminPerfil;

      if (!esAdminPerfil) {
        await registrarIngresoActividad(data.user.id, perfil.usuario || usuarioIngresado);
      }

      localStorage.setItem("usuarioLogeado", perfil.usuario || usuarioIngresado);
      if (mensajeLogin) mensajeLogin.textContent = "";

      limpiarFormularioApp();
      mostrarApp(perfil.usuario || usuarioIngresado);

      if (esAdminActual) {
        paginaActualAdmin = 1;
        configurarVistaAdminInicial();
        await cargarHistorialAdmin();
        await cargarUsuariosAdmin();
        await cargarSolicitudesAdmin();
        await cargarActividadAdmin();
      } else {
        ocultarPanelAdmin();
        configurarVistaAdminInicial();
      }

      iniciarTemporizadorSesion();
      mostrarBody();
    } catch (err) {
      console.error("Ocurrio un error al iniciar sesion:", err);
      if (mensajeLogin) mensajeLogin.textContent = "Ocurrio un error al iniciar sesion";
      mostrarBody();
    } finally {
      if (btnIngresar) btnIngresar.disabled = false;
    }
  }

  if (btnIngresar) btnIngresar.addEventListener("click", iniciarSesion);

  if (btnAbrirSolicitud) {
    btnAbrirSolicitud.addEventListener("click", () => {
      abrirModalSolicitud();
    });
  }

  if (btnCancelarSolicitud) {
    btnCancelarSolicitud.addEventListener("click", () => {
      cerrarModalSolicitud();
    });
  }

  if (btnEntendidoSolicitud) {
    btnEntendidoSolicitud.addEventListener("click", () => {
      cerrarModalSolicitud();
    });
  }

  if (cerrarModalSolicitudBackdrop) {
    cerrarModalSolicitudBackdrop.addEventListener("click", () => {
      cerrarModalSolicitud();
    });
  }

  if (btnEnviarSolicitud) {
    btnEnviarSolicitud.addEventListener("click", async () => {
      await enviarSolicitudAcceso();
    });
  }

  if (claveLogin) {
    claveLogin.addEventListener("keydown", (e) => {
      if (e.key === "Enter") iniciarSesion(e);
    });
  }

  if (usuarioLogin) {
    usuarioLogin.addEventListener("keydown", (e) => {
      if (e.key === "Enter") iniciarSesion(e);
    });
  }

  [usuarioSolicitud, claveSolicitud, nombreCompletoSolicitud].forEach((campo) => {
    if (!campo) return;
    campo.addEventListener("keydown", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        await enviarSolicitudAcceso();
      }
    });
  });

  if (cerrarSesion) {
    cerrarSesion.addEventListener("click", async (e) => {
      if (e) e.preventDefault();

      try {
        await supabase.auth.signOut();
      } catch (err) {}

      limpiarTemporizadorSesion();
      perfilActual = null;
      esAdminActual = false;
      localStorage.removeItem("usuarioLogeado");
      limpiarCamposLogin();
      resetearOjoPassword();
      ocultarPanelAdmin();
      limpiarFormularioApp();
      cerrarModalSolicitud();

      if (mensajeLogin) mensajeLogin.textContent = "";
      mostrarLogin();
      mostrarBody();
    });
  }

  if (btnMenuRegistro) {
    btnMenuRegistro.addEventListener("click", () => {
      abrirSeccionAdmin("registro");
    });
  }

  if (btnMenuHistorial) {
    btnMenuHistorial.addEventListener("click", () => {
      abrirSeccionAdmin("historial");
    });
  }

  if (btnMenuUsuarios) {
    btnMenuUsuarios.addEventListener("click", () => {
      abrirSeccionAdmin("usuarios");
    });
  }

  if (btnMenuActividad) {
    btnMenuActividad.addEventListener("click", async () => {
      abrirSeccionAdmin("actividad");
      await cargarActividadAdmin();
    });
  }

  if (btnVolverMenuDesdeRegistro) {
    btnVolverMenuDesdeRegistro.addEventListener("click", () => {
      mostrarMenuAdmin();
    });
  }

  if (btnVolverMenuDesdeHistorial) {
    btnVolverMenuDesdeHistorial.addEventListener("click", () => {
      mostrarMenuAdmin();
    });
  }

  if (btnVolverMenuDesdeUsuarios) {
    btnVolverMenuDesdeUsuarios.addEventListener("click", () => {
      mostrarMenuAdmin();
    });
  }

  if (btnVolverMenuDesdeActividad) {
    btnVolverMenuDesdeActividad.addEventListener("click", () => {
      detalleActividadExpandidoUserId = null;
      mostrarMenuAdmin();
    });
  }

  if (btnRecargarActividadAdmin) {
    btnRecargarActividadAdmin.addEventListener("click", async () => {
      detalleActividadExpandidoUserId = null;
      await cargarActividadAdmin();
    });
  }

  if (filtroFechaDesdeActividadAdmin) {
    filtroFechaDesdeActividadAdmin.addEventListener("change", () => {
      detalleActividadExpandidoUserId = null;
      renderizarActividadAdmin();
    });
  }

  if (filtroFechaHastaActividadAdmin) {
    filtroFechaHastaActividadAdmin.addEventListener("change", () => {
      detalleActividadExpandidoUserId = null;
      renderizarActividadAdmin();
    });
  }

  if (btnLimpiarActividadAdmin) {
    btnLimpiarActividadAdmin.addEventListener("click", () => {
      if (filtroFechaDesdeActividadAdmin) filtroFechaDesdeActividadAdmin.value = "";
      if (filtroFechaHastaActividadAdmin) filtroFechaHastaActividadAdmin.value = "";
      detalleActividadExpandidoUserId = null;
      renderizarActividadAdmin();
    });
  }

  if (listaActividadAdmin) {
    listaActividadAdmin.addEventListener("click", async (event) => {
      const botonOrden = event.target.closest(".btn-actividad-orden");
      if (botonOrden) {
        const userIdOrden = botonOrden.getAttribute("data-user-id");
        if (userIdOrden) {
          ordenActividadDetalleCache[userIdOrden] = ordenActividadDetalleCache[userIdOrden] === "asc" ? "desc" : "asc";
          renderizarActividadAdmin();
        }
        return;
      }

      const botonDetalle = event.target.closest(".btn-actividad-detalle");
      if (!botonDetalle) return;

      const userId = botonDetalle.getAttribute("data-user-id");
      if (!userId) return;

      await toggleDetalleActividadAdmin(userId);
    });
  }

  if (opcionCamper) {
    opcionCamper.addEventListener("change", () => {
      if (opcionCamper.checked) {
        aplicarDatosUnidad("camper");
      }
    });
  }

  if (opcionMovilBus) {
    opcionMovilBus.addEventListener("change", () => {
      if (opcionMovilBus.checked) {
        aplicarDatosUnidad("movil_bus");
      }
    });
  }

  if (opcionGrupoAla) {
    opcionGrupoAla.addEventListener("change", () => {
      if (opcionGrupoAla.checked) {
        aplicarDatosUnidad("grupo_ala");
      }
    });
  }

  seleccionarUnidadPorTipo("camper");

  if (botonDescargar) {
    botonDescargar.disabled = true;
    botonDescargar.style.background = "#9aa0a6";
  }

  if (inputFoto && nombreArchivo) {
    inputFoto.addEventListener("change", function () {
      if (inputFoto.files && inputFoto.files[0]) {
        nombreArchivo.textContent = inputFoto.files[0].name;
      } else {
        nombreArchivo.textContent = "Sin archivos seleccionados";
      }
    });
  }

  function mostrarMensaje(texto) {
    let mensaje = document.getElementById("mensaje");

    if (!mensaje) {
      mensaje = document.createElement("div");
      mensaje.id = "mensaje";
      mensaje.style.position = "fixed";
      mensaje.style.bottom = "20px";
      mensaje.style.left = "50%";
      mensaje.style.transform = "translateX(-50%)";
      mensaje.style.background = "#333";
      mensaje.style.color = "#fff";
      mensaje.style.padding = "10px 16px";
      mensaje.style.borderRadius = "8px";
      mensaje.style.fontSize = "14px";
      mensaje.style.zIndex = "9999";
      mensaje.style.transition = "opacity 0.25s ease";
      document.body.appendChild(mensaje);
    }

    mensaje.textContent = texto;
    mensaje.style.opacity = "1";

    setTimeout(() => {
      mensaje.style.opacity = "0";
    }, 2000);
  }

  function escapeHtml(texto) {
    return String(texto || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatearFecha(fechaISO) {
    if (!fechaISO) return "";
    const partes = fechaISO.split("-");
    if (partes.length !== 3) return fechaISO;

    const dia = parseInt(partes[2], 10);
    const mes = partes[1];
    const ano = partes[0];

    return dia + "/" + mes + "/" + ano;
  }

  function formatearFechaHoraRegistro(registro) {
    const fechaTexto = registro?.fecha_texto || "";
    const horaTexto = registro?.hora_texto || "";

    if (!fechaTexto && !horaTexto) return "-";

    let fechaFormateada = fechaTexto;

    if (fechaTexto && /^\d{4}-\d{2}-\d{2}$/.test(fechaTexto)) {
      const [anio, mes, dia] = fechaTexto.split("-");
      fechaFormateada = `${dia}/${mes}/${anio}`;
    }

    return `${fechaFormateada}${horaTexto ? " " + horaTexto : ""}`.trim();
  }

  function formatearCreatedAt(createdAt) {
    if (!createdAt) return "-";

    const fecha = new Date(createdAt);

    if (isNaN(fecha.getTime())) return createdAt;

    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, "0");
    const minutos = String(fecha.getMinutes()).padStart(2, "0");
    const segundos = String(fecha.getSeconds()).padStart(2, "0");

    return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;
  }

  function limitarTextoSinPuntos(texto, maxAncho) {
    let textoFinal = texto;

    if (ctx.measureText(textoFinal).width <= maxAncho) return textoFinal;

    while (textoFinal.length > 0 && ctx.measureText(textoFinal).width > maxAncho) {
      textoFinal = textoFinal.slice(0, -1);
    }

    return textoFinal;
  }

  function dibujarLineaAPK(texto, x, y) {
    ctx.save();
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "left";
    ctx.font = `${TEXT_SIZE}px sans-serif`;

    ctx.shadowColor = "rgba(0,0,0,1)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    ctx.fillStyle = "#ffffff";
    ctx.fillText(texto, Math.round(x), Math.round(y));
    ctx.restore();
  }

  async function obtenerUsuarioActual() {
    try {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data || !data.user) {
        console.error("No se pudo obtener el usuario actual:", error);
        return null;
      }

      return data.user;
    } catch (err) {
      console.error("Error obteniendo usuario actual:", err);
      return null;
    }
  }

  function dataURLtoBlob(dataURL) {
    const partes = dataURL.split(",");
    const mimeMatch = partes[0].match(/:(.*?);/);
    const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
    const binario = atob(partes[1]);
    const largo = binario.length;
    const u8arr = new Uint8Array(largo);

    for (let i = 0; i < largo; i++) {
      u8arr[i] = binario.charCodeAt(i);
    }

    return new Blob([u8arr], { type: mime });
  }

  function obtenerExtensionSeguro(nombre) {
    if (!nombre || typeof nombre !== "string") return "jpg";
    const partes = nombre.split(".");
    if (partes.length < 2) return "jpg";
    return partes.pop().toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  }

  function obtenerNombreBaseSeguro(nombre) {
    if (!nombre || typeof nombre !== "string") return "imagen";
    const sinExtension = nombre.replace(/\.[^/.]+$/, "");
    return sinExtension.replace(/[^a-zA-Z0-9_-]/g, "_") || "imagen";
  }

  async function subirImagenDescargadaYGuardarRegistro(dataURL) {
    try {
      const usuario = await obtenerUsuarioActual();

      if (!usuario) {
        mostrarMensaje("No se encontro la sesion del usuario");
        return false;
      }

      const archivoOriginal = inputFoto && inputFoto.files ? inputFoto.files[0] : null;
      const nombreOriginal = archivoOriginal ? archivoOriginal.name : "imagen.jpg";
      const extensionOriginal = obtenerExtensionSeguro(nombreOriginal);
      const nombreBaseOriginal = obtenerNombreBaseSeguro(nombreOriginal);

      const coordenadas = inputCoordenadas ? inputCoordenadas.value.trim() : "";
      const ubicacion = inputUbicacion ? inputUbicacion.value.trim().toUpperCase() : "";
      const fechaTexto = inputFecha ? inputFecha.value.trim() : "";
      const horaTexto = inputHora ? inputHora.value.trim() : "";

      const blob = dataURLtoBlob(dataURL);
      const ahora = new Date();
      const timestamp = ahora.getTime();

      const nombreGuardado = `${nombreBaseOriginal}_${timestamp}.${extensionOriginal === "png" ? "png" : "jpg"}`;
      const storagePath = `user_${usuario.id}/${nombreGuardado}`;

      const { error: errorUpload } = await supabase.storage
        .from("imagenes-generadas")
        .upload(storagePath, blob, {
          contentType: "image/jpeg",
          upsert: false
        });

      if (errorUpload) {
        console.error("Error al subir imagen a Storage:", errorUpload);
        mostrarMensaje("Se descargo, pero fallo guardar en Supabase");
        return false;
      }

      const { data: dataPublicUrl } = supabase.storage
        .from("imagenes-generadas")
        .getPublicUrl(storagePath);

      const publicUrl = dataPublicUrl && dataPublicUrl.publicUrl
        ? dataPublicUrl.publicUrl
        : null;

      const { error: errorInsert } = await supabase
        .from("registros_generacion")
        .insert([
          {
            user_id: usuario.id,
            coordenadas: coordenadas,
            ubicacion: ubicacion,
            fecha_texto: fechaTexto,
            hora_texto: horaTexto,
            nombre_archivo: nombreOriginal,
            storage_path: storagePath,
            public_url: publicUrl
          }
        ]);

      if (errorInsert) {
        console.error("Error al guardar registro en tabla:", errorInsert);
        mostrarMensaje("La imagen subio, pero fallo el registro");
        return false;
      }

      ultimoStoragePathGuardado = storagePath;
      ultimaPublicUrlGuardada = publicUrl;

      if (esAdminActual) {
        paginaActualAdmin = 1;
        await cargarHistorialAdmin();
        await cargarUsuariosAdmin();
      }

      return true;
    } catch (error) {
      console.error("Error general guardando imagen y registro:", error);
      mostrarMensaje("Ocurrio un error al guardar en Supabase");
      return false;
    }
  }

  function escaparHtml(valor) {
    return String(valor ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function textoErrorSupabase(error) {
    if (!error) return "Error desconocido";
    return error.message || error.details || error.hint || JSON.stringify(error);
  }

  function renderErrorSolicitudes(error) {
    const mensaje = textoErrorSupabase(error);

    if (!listaSolicitudesAdmin) return;

    listaSolicitudesAdmin.innerHTML = `
      <div style="padding:12px; border:1px solid #f1b0b7; background:#fff5f6; color:#9f1d2c; border-radius:10px;">
        <div style="font-weight:700; margin-bottom:6px;">Error al cargar solicitudes</div>
        <div style="font-size:13px; line-height:1.45;">${escaparHtml(mensaje)}</div>
      </div>
    `;

    actualizarResumenSolicitudes(0);
  }

  function renderErrorHistorial(error) {
    const mensaje = textoErrorSupabase(error);

    if (!historialAdmin) return;

    historialAdmin.innerHTML = `
      <div style="padding:12px; border:1px solid #f1b0b7; background:#fff5f6; color:#9f1d2c; border-radius:10px;">
        <div style="font-weight:700; margin-bottom:6px;">Error al cargar historial</div>
        <div style="font-size:13px; line-height:1.45;">${escaparHtml(mensaje)}</div>
      </div>
    `;

    actualizarResumenHistorial(0, 0, 0);
    ocultarPaginacionAdmin();
  }

  function renderErrorUsuarios(error) {
    const mensaje = textoErrorSupabase(error);

    if (!listaUsuariosAdmin) return;

    listaUsuariosAdmin.innerHTML = `
      <div style="padding:12px; border:1px solid #f1b0b7; background:#fff5f6; color:#9f1d2c; border-radius:10px;">
        <div style="font-weight:700; margin-bottom:6px;">Error al cargar usuarios</div>
        <div style="font-size:13px; line-height:1.45;">${escaparHtml(mensaje)}</div>
      </div>
    `;

    actualizarResumenUsuarios(0, 0, 0);
    ocultarPaginacionUsuariosAdmin();
  }

  async function obtenerMapaUsuariosPorIds(userIds) {
    const idsUnicos = [...new Set((userIds || []).filter(Boolean))];

    if (idsUnicos.length === 0) return {};

    const { data, error } = await supabase
      .from("profiles")
      .select("id, usuario")
      .in("id", idsUnicos);

    if (error || !data) {
      console.error("Error obteniendo usuarios del historial:", error);
      return {};
    }

    const mapa = {};
    data.forEach((item) => {
      mapa[item.id] = item.usuario || item.id;
    });

    return mapa;
  }

  async function consultarRegistrosConCreatedAt() {
    return await supabase
      .from("registros_generacion")
      .select("id, user_id, coordenadas, ubicacion, fecha_texto, hora_texto, nombre_archivo, storage_path, public_url, created_at")
      .order("created_at", { ascending: false });
  }

  async function consultarRegistrosSinCreatedAt() {
    return await supabase
      .from("registros_generacion")
      .select("id, user_id, coordenadas, ubicacion, fecha_texto, hora_texto, nombre_archivo, storage_path, public_url");
  }

  async function obtenerRegistrosAdminSeguro() {
    const intento1 = await consultarRegistrosConCreatedAt();

    if (!intento1.error) {
      return {
        data: intento1.data || [],
        error: null,
        usandoCreatedAt: true
      };
    }

    const mensaje1 = textoErrorSupabase(intento1.error).toLowerCase();

    const pareceFaltaCreatedAt =
      mensaje1.includes("created_at") &&
      (
        mensaje1.includes("column") ||
        mensaje1.includes("does not exist") ||
        mensaje1.includes("schema cache") ||
        mensaje1.includes("could not find")
      );

    if (!pareceFaltaCreatedAt) {
      return {
        data: null,
        error: intento1.error,
        usandoCreatedAt: false
      };
    }

    const intento2 = await consultarRegistrosSinCreatedAt();

    if (intento2.error) {
      return {
        data: null,
        error: intento2.error,
        usandoCreatedAt: false
      };
    }

    return {
      data: intento2.data || [],
      error: null,
      usandoCreatedAt: false
    };
  }

  function obtenerFechaComparableRegistro(registro) {
    if (registro?.fecha_texto && /^\d{4}-\d{2}-\d{2}$/.test(registro.fecha_texto)) {
      return registro.fecha_texto;
    }

    if (registro?.created_at) {
      const fecha = new Date(registro.created_at);
      if (!isNaN(fecha.getTime())) {
        const anio = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, "0");
        const dia = String(fecha.getDate()).padStart(2, "0");
        return `${anio}-${mes}-${dia}`;
      }
    }

    return "";
  }

  function aplicarFiltrosAdmin() {
    const textoUsuario = filtroUsuarioAdmin ? filtroUsuarioAdmin.value.trim().toLowerCase() : "";

    let fechaDesde = filtroFechaDesdeAdmin ? filtroFechaDesdeAdmin.value.trim() : "";
    let fechaHasta = filtroFechaHastaAdmin ? filtroFechaHastaAdmin.value.trim() : "";

    if ((!fechaDesde && !fechaHasta) && filtroFechaAdmin && filtroFechaAdmin.value.trim()) {
      fechaDesde = filtroFechaAdmin.value.trim();
      fechaHasta = filtroFechaAdmin.value.trim();
    }

    registrosAdminCache = registrosAdminOriginalCache.filter((registro) => {
      const nombreUsuario = String(registro.nombreUsuario || "").toLowerCase();
      const cumpleUsuario = !textoUsuario || nombreUsuario.includes(textoUsuario);

      const fechaRegistro = obtenerFechaComparableRegistro(registro);

      let cumpleDesde = true;
      let cumpleHasta = true;

      if (fechaDesde) {
        cumpleDesde = !!fechaRegistro && fechaRegistro >= fechaDesde;
      }

      if (fechaHasta) {
        cumpleHasta = !!fechaRegistro && fechaRegistro <= fechaHasta;
      }

      return cumpleUsuario && cumpleDesde && cumpleHasta;
    });

    paginaActualAdmin = 1;
    renderizarPaginaActualAdmin();
  }

  function aplicarFiltroUsuariosAdmin() {
    const texto = filtroUsuarioPanelAdmin
      ? filtroUsuarioPanelAdmin.value.trim().toLowerCase()
      : "";

    usuariosAdminCache = usuariosAdminOriginalCache.filter((usuario) => {
      const nombre = String(usuario.usuario || "").toLowerCase();
      const rol = String(usuario.rol || "").toLowerCase();

      if (rol === "admin" || nombre === "admin") {
        return false;
      }

      return !texto || nombre.includes(texto);
    });

    paginaActualUsuariosAdmin = 1;
    renderizarUsuariosAdmin();
  }

  async function descargarImagenDesdeUrl(url, nombreArchivo) {
    if (!url) {
      mostrarMensaje("No hay imagen para descargar");
      return;
    }

    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error(`HTTP ${respuesta.status}`);
      }

      const blob = await respuesta.blob();
      const objectUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = nombreArchivo || "imagen.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        URL.revokeObjectURL(objectUrl);
      }, 1000);
    } catch (error) {
      console.error("Error descargando imagen del historial:", error);

      try {
        const link = document.createElement("a");
        link.href = url;
        link.download = nombreArchivo || "imagen.jpg";
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error2) {
        console.error("Error en descarga alternativa:", error2);
        mostrarMensaje("No se pudo descargar la imagen");
      }
    }
  }

  function construirHtmlTarjetasHistorial(registros) {
    const iconoDescargar = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 20h14v-2H5v2zM11 4h2v8h3l-4 4-4-4h3V4z"/>
      </svg>
    `;

    const iconoEliminar = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7h12l-1 14H7L6 7zm3-4h6l1 2h4v2H4V5h4l1-2z"/>
      </svg>
    `;

    return registros.map((registro) => {
      const imagenHtml = registro.public_url
        ? `
          <div class="tarjeta-registro-admin-imagen">
            <img src="${escaparHtml(registro.public_url)}" alt="Imagen del registro">
          </div>
        `
        : `
          <div class="tarjeta-registro-admin-vacia">Sin imagen</div>
        `;

      const botonDescargar = registro.public_url
        ? `
          <button
            type="button"
            class="btn-historial-accion btn-historial-descargar btn-descargar-registro"
            data-url="${escaparHtml(registro.public_url)}"
            data-nombre="${escaparHtml(registro.nombre_archivo || "imagen.jpg")}"
          >
            ${iconoDescargar}
            <span>Descargar</span>
          </button>
        `
        : `
          <button
            type="button"
            class="btn-historial-accion btn-historial-descargar"
            disabled
            style="opacity:0.65; cursor:not-allowed;"
          >
            ${iconoDescargar}
            <span>Descargar</span>
          </button>
        `;

      return `
        <div class="tarjeta-registro-admin">
          ${imagenHtml}

          <div class="tarjeta-registro-admin-texto">
            <div class="fila-info"><strong>Usuario:</strong> ${escaparHtml(registro.nombreUsuario || "-")}</div>
            <div class="fila-info"><strong>Ubicacion:</strong> ${escaparHtml(registro.ubicacion || "-")}</div>
            <div class="fila-info"><strong>Coordenadas:</strong> ${escaparHtml(registro.coordenadas || "-")}</div>
            <div class="fila-info"><strong>Fecha / hora app:</strong> ${escaparHtml(formatearFechaHoraRegistro(registro) || "-")}</div>
            <div class="fila-info"><strong>Creado en sistema:</strong> ${escaparHtml(formatearCreatedAt(registro.created_at) || "-")}</div>
            <div class="fila-info"><strong>Archivo:</strong> ${escaparHtml(registro.nombre_archivo || "-")}</div>
          </div>

          <div class="tarjeta-registro-admin-acciones">
            ${botonDescargar}
            <button
              type="button"
              class="btn-historial-accion btn-historial-eliminar btn-eliminar-registro"
              data-id="${escaparHtml(registro.id)}"
              data-storage-path="${escaparHtml(registro.storage_path || "")}"
            >
              ${iconoEliminar}
              <span>Eliminar</span>
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  function construirHtmlTarjetasUsuarios(usuarios) {
    return usuarios.map((usuario) => {
      const activo = usuario.activo === true;
      const esAdminFila = String(usuario.rol || "").toLowerCase() === "admin";
      const textoEstado = activo ? "Activo" : "Inactivo";
      const colorEstado = activo ? "#1b5e20" : "#9f1d2c";
      const fondoEstado = activo ? "#e8f5e9" : "#fff5f6";
      const textoBoton = activo ? "Desactivar" : "Activar";
      const colorBoton = activo ? "#c62828" : "#2e7d32";

      const tieneInstalacion = usuario.tieneInstalacionActiva === true;
      const textoDispositivo = tieneInstalacion ? "Vinculado" : "Sin vincular";
      const colorDispositivo = tieneInstalacion ? "#0d47a1" : "#8a1c1c";
      const fondoDispositivo = tieneInstalacion ? "#e3f2fd" : "#fff4f4";
      const textoInstallationId = usuario.installation_id ? usuario.installation_id : "-";
      const textoDeviceInfo = usuario.device_info ? usuario.device_info : "-";
      const textoFechaVinculacion = usuario.fecha_vinculacion_texto ? usuario.fecha_vinculacion_texto : "-";

      const anchoBoton = esAdminFila ? "100%" : "calc(50% - 4px)";

      const botonToggle = esAdminFila
        ? ""
        : `
            <button
              type="button"
              class="btn-toggle-usuario-admin"
              data-id="${escaparHtml(usuario.id)}"
              data-activo="${activo ? "true" : "false"}"
              data-usuario="${escaparHtml(usuario.usuario || "")}"
              style="width:${anchoBoton}; background:${colorBoton}; color:#fff; border:none; border-radius:8px; padding:10px 14px; cursor:pointer;"
            >
              ${textoBoton}
            </button>
          `;

      const botonDesvincular = tieneInstalacion
        ? `
            <button
              type="button"
              class="btn-desvincular-dispositivo-admin"
              data-id="${escaparHtml(usuario.id)}"
              data-usuario="${escaparHtml(usuario.usuario || "")}"
              style="width:${esAdminFila ? "100%" : "calc(50% - 4px)"}; background:#1565c0; color:#fff; border:none; border-radius:8px; padding:10px 14px; cursor:pointer;"
            >
              Desvincular dispositivo
            </button>
          `
        : "";

      const bloqueAcciones = (botonToggle || botonDesvincular)
        ? `
          <div style="margin-top:10px; display:flex; gap:8px; flex-wrap:nowrap; justify-content:flex-start;">
            ${botonToggle}
            ${botonDesvincular}
          </div>
        `
        : "";

      return `
        <div style="border:1px solid #d9d9d9; border-radius:12px; padding:12px; margin-bottom:12px; background:#fff;">
          <div style="font-size:14px; line-height:1.45;">
            <div><strong>Usuario:</strong> ${escaparHtml(usuario.usuario || "-")}</div>
            <div><strong>Rol:</strong> ${escaparHtml(usuario.rol || "-")}</div>
            <div>
              <strong>Estado:</strong>
              <span style="display:inline-block; margin-left:6px; padding:4px 8px; border-radius:999px; background:${fondoEstado}; color:${colorEstado}; font-weight:700;">
                ${textoEstado}
              </span>
            </div>
            <div>
              <strong>Dispositivo:</strong>
              <span style="display:inline-block; margin-left:6px; padding:4px 8px; border-radius:999px; background:${fondoDispositivo}; color:${colorDispositivo}; font-weight:700;">
                ${textoDispositivo}
              </span>
            </div>
            <div><strong>ID:</strong> ${escaparHtml(usuario.id || "-")}</div>
            <div><strong>Installation ID:</strong> ${escaparHtml(textoInstallationId)}</div>
            <div><strong>Info dispositivo:</strong> ${escaparHtml(textoDeviceInfo)}</div>
            <div><strong>Fecha de vinculacion:</strong> ${escaparHtml(textoFechaVinculacion)}</div>
            <div><strong>Total registros:</strong> ${escaparHtml(usuario.totalRegistros || 0)}</div>
          </div>

          ${bloqueAcciones}
        </div>
      `;
    }).join("");
  }

  function obtenerColorEstadoSolicitud(estado) {
    const valor = String(estado || "pendiente").toLowerCase();

    if (valor === "aprobado") {
      return { texto: "#1b5e20", fondo: "#e8f5e9", etiqueta: "Aprobado" };
    }

    if (valor === "rechazado") {
      return { texto: "#9f1d2c", fondo: "#fff5f6", etiqueta: "Rechazado" };
    }

    return { texto: "#0d47a1", fondo: "#e3f2fd", etiqueta: "Pendiente" };
  }

  function construirHtmlSolicitudesAdmin(solicitudes) {
    return (solicitudes || []).map((solicitud) => {
      const estadoUi = obtenerColorEstadoSolicitud(solicitud.estado);
      const puedeAprobar = String(solicitud.estado || "").toLowerCase() !== "aprobado";
      const puedeRechazar = String(solicitud.estado || "").toLowerCase() !== "rechazado";

      return `
        <div class="tarjeta-solicitud-admin">
          <div class="tarjeta-solicitud-admin-texto">
            <div><strong>Usuario:</strong> ${escaparHtml(solicitud.usuario || "-")}</div>
            <div><strong>Nombres:</strong> ${escaparHtml(solicitud.nombre_completo || "-")}</div>
            <div><strong>Clave solicitada:</strong> ${escaparHtml(solicitud.clave || "-")}</div>
            <div>
              <strong>Estado:</strong>
              <span style="display:inline-block; margin-left:6px; padding:4px 8px; border-radius:999px; background:${estadoUi.fondo}; color:${estadoUi.texto}; font-weight:700;">${estadoUi.etiqueta}</span>
            </div>
            <div><strong>Ultimo envio:</strong> ${escaparHtml(formatearCreatedAt(solicitud.updated_at || solicitud.created_at) || "-")}</div>
          </div>

          <div class="tarjeta-solicitud-admin-acciones">
            <button
              type="button"
              class="btn-solicitud-admin btn-aprobar-solicitud-admin"
              data-id="${escaparHtml(solicitud.id || "")}"
              data-usuario="${escaparHtml(solicitud.usuario || "")}"
              ${puedeAprobar ? "" : `disabled style="opacity:0.65;cursor:not-allowed;"`}
            >
              Aprobar
            </button>
            <button
              type="button"
              class="btn-solicitud-admin btn-rechazar-solicitud-admin"
              data-id="${escaparHtml(solicitud.id || "")}"
              data-usuario="${escaparHtml(solicitud.usuario || "")}"
              ${puedeRechazar ? "" : `disabled style="opacity:0.65;cursor:not-allowed;"`}
            >
              Rechazar
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  function renderizarSolicitudesAdmin() {
    if (!listaSolicitudesAdmin) return;

    if (!solicitudesAdminCache.length) {
      listaSolicitudesAdmin.innerHTML = "<p style='padding:10px;'>No hay solicitudes registradas</p>";
      actualizarResumenSolicitudes(0);
      return;
    }

    listaSolicitudesAdmin.innerHTML = construirHtmlSolicitudesAdmin(solicitudesAdminCache);
    actualizarResumenSolicitudes(solicitudesAdminCache.length);
  }

  function actualizarControlesPaginacionAdmin() {
    const totalRegistros = registrosAdminCache.length;
    const totalPaginas = Math.max(1, Math.ceil(totalRegistros / REGISTROS_POR_PAGINA));

    if (totalRegistros === 0) {
      ocultarPaginacionAdmin();
      return;
    }

    if (paginaActualAdmin > totalPaginas) paginaActualAdmin = totalPaginas;
    if (paginaActualAdmin < 1) paginaActualAdmin = 1;

    mostrarPaginacionAdmin();

    if (infoPaginaAdmin) {
      infoPaginaAdmin.textContent = `Pagina ${paginaActualAdmin} de ${totalPaginas}`;
    }

    if (btnPaginaAnterior) {
      const deshabilitado = paginaActualAdmin <= 1;
      btnPaginaAnterior.disabled = deshabilitado;
      btnPaginaAnterior.style.opacity = deshabilitado ? "0.6" : "1";
      btnPaginaAnterior.style.cursor = deshabilitado ? "not-allowed" : "pointer";
    }

    if (btnPaginaSiguiente) {
      const deshabilitado = paginaActualAdmin >= totalPaginas;
      btnPaginaSiguiente.disabled = deshabilitado;
      btnPaginaSiguiente.style.opacity = deshabilitado ? "0.6" : "1";
      btnPaginaSiguiente.style.cursor = deshabilitado ? "not-allowed" : "pointer";
    }
  }

  function renderizarPaginaActualAdmin() {
    if (!historialAdmin) return;

    const totalRegistros = registrosAdminCache.length;

    if (!totalRegistros) {
      historialAdmin.innerHTML = "<p style='padding:10px;'>No hay registros para los filtros aplicados</p>";
      actualizarResumenHistorial(0, 0, 0);
      ocultarPaginacionAdmin();
      return;
    }

    const totalPaginas = Math.max(1, Math.ceil(totalRegistros / REGISTROS_POR_PAGINA));

    if (paginaActualAdmin > totalPaginas) paginaActualAdmin = totalPaginas;
    if (paginaActualAdmin < 1) paginaActualAdmin = 1;

    const inicio = (paginaActualAdmin - 1) * REGISTROS_POR_PAGINA;
    const fin = inicio + REGISTROS_POR_PAGINA;
    const registrosPagina = registrosAdminCache.slice(inicio, fin);

    historialAdmin.innerHTML = construirHtmlTarjetasHistorial(registrosPagina);

    const inicioHumano = inicio + 1;
    const finHumano = inicio + registrosPagina.length;

    actualizarResumenHistorial(totalRegistros, inicioHumano, finHumano);
    actualizarControlesPaginacionAdmin();
  }

  function actualizarControlesPaginacionUsuariosAdmin() {
    const totalUsuarios = usuariosAdminCache.length;
    const totalPaginas = Math.max(1, Math.ceil(totalUsuarios / USUARIOS_POR_PAGINA));

    if (totalUsuarios === 0) {
      ocultarPaginacionUsuariosAdmin();
      return;
    }

    if (paginaActualUsuariosAdmin > totalPaginas) paginaActualUsuariosAdmin = totalPaginas;
    if (paginaActualUsuariosAdmin < 1) paginaActualUsuariosAdmin = 1;

    mostrarPaginacionUsuariosAdmin();

    if (infoPaginaUsuariosAdmin) {
      infoPaginaUsuariosAdmin.textContent = `Pagina ${paginaActualUsuariosAdmin} de ${totalPaginas}`;
    }

    if (btnPaginaAnteriorUsuarios) {
      const deshabilitado = paginaActualUsuariosAdmin <= 1;
      btnPaginaAnteriorUsuarios.disabled = deshabilitado;
      btnPaginaAnteriorUsuarios.style.opacity = deshabilitado ? "0.6" : "1";
      btnPaginaAnteriorUsuarios.style.cursor = deshabilitado ? "not-allowed" : "pointer";
    }

    if (btnPaginaSiguienteUsuarios) {
      const deshabilitado = paginaActualUsuariosAdmin >= totalPaginas;
      btnPaginaSiguienteUsuarios.disabled = deshabilitado;
      btnPaginaSiguienteUsuarios.style.opacity = deshabilitado ? "0.6" : "1";
      btnPaginaSiguienteUsuarios.style.cursor = deshabilitado ? "not-allowed" : "pointer";
    }
  }

  function renderizarUsuariosAdmin() {
    if (!listaUsuariosAdmin) return;

    const total = usuariosAdminCache.length;

    if (!total) {
      listaUsuariosAdmin.innerHTML = "<p style='padding:10px;'>No hay usuarios para la busqueda aplicada</p>";
      actualizarResumenUsuarios(0, 0, 0);
      ocultarPaginacionUsuariosAdmin();
      return;
    }

    const totalPaginas = Math.max(1, Math.ceil(total / USUARIOS_POR_PAGINA));

    if (paginaActualUsuariosAdmin > totalPaginas) paginaActualUsuariosAdmin = totalPaginas;
    if (paginaActualUsuariosAdmin < 1) paginaActualUsuariosAdmin = 1;

    const inicio = (paginaActualUsuariosAdmin - 1) * USUARIOS_POR_PAGINA;
    const fin = inicio + USUARIOS_POR_PAGINA;
    const usuariosPagina = usuariosAdminCache.slice(inicio, fin);

    listaUsuariosAdmin.innerHTML = construirHtmlTarjetasUsuarios(usuariosPagina);

    const inicioHumano = inicio + 1;
    const finHumano = inicio + usuariosPagina.length;

    actualizarResumenUsuarios(total, inicioHumano, finHumano);
    actualizarControlesPaginacionUsuariosAdmin();
  }

  async function cargarHistorialAdmin() {
    if (!esAdminActual) {
      ocultarPanelAdmin();
      return;
    }

    if (!historialAdmin || cargandoHistorialAdmin) return;

    cargandoHistorialAdmin = true;
    historialAdmin.innerHTML = "<p style='padding:10px;'>Cargando historial...</p>";
    actualizarResumenHistorial(0, 0, 0);
    ocultarPaginacionAdmin();

    try {
      const resultado = await obtenerRegistrosAdminSeguro();

      if (resultado.error) {
        console.error("Error cargando historial admin:", resultado.error);
        renderErrorHistorial(resultado.error);
        return;
      }

      let registros = Array.isArray(resultado.data) ? resultado.data.slice() : [];

      if (!resultado.usandoCreatedAt) {
        registros.reverse();
      }

      if (!registros || registros.length === 0) {
        registrosAdminOriginalCache = [];
        registrosAdminCache = [];
        paginaActualAdmin = 1;
        historialAdmin.innerHTML = "<p style='padding:10px;'>No hay registros todavia</p>";
        actualizarResumenHistorial(0, 0, 0);
        ocultarPaginacionAdmin();
        return;
      }

      const mapaUsuarios = await obtenerMapaUsuariosPorIds(registros.map((r) => r.user_id));

      registrosAdminOriginalCache = registros.map((registro) => {
        return {
          ...registro,
          nombreUsuario: mapaUsuarios[registro.user_id] || registro.user_id || "-"
        };
      });

      aplicarFiltrosAdmin();
    } catch (err) {
      console.error("Error general cargando historial admin:", err);
      renderErrorHistorial(err);
    } finally {
      cargandoHistorialAdmin = false;
    }
  }

  async function cargarSolicitudesAdmin() {
    if (!esAdminActual || !listaSolicitudesAdmin || cargandoSolicitudesAdmin) return;

    cargandoSolicitudesAdmin = true;
    listaSolicitudesAdmin.innerHTML = "<p style='padding:10px;'>Cargando solicitudes...</p>";
    actualizarResumenSolicitudes(0);

    try {
      const { data, error } = await supabase
        .from("solicitudes_acceso")
        .select("id, usuario, clave, nombre_completo, estado, created_at, updated_at, auth_user_id")
        .eq("estado", "pendiente")
        .order("updated_at", { ascending: false });

      if (error) {
        console.error("Error cargando solicitudes:", error);
        renderErrorSolicitudes(error);
        return;
      }

      solicitudesAdminCache = data || [];
      renderizarSolicitudesAdmin();
    } catch (err) {
      console.error("Error general cargando solicitudes:", err);
      renderErrorSolicitudes(err);
    } finally {
      cargandoSolicitudesAdmin = false;
    }
  }

  async function cargarUsuariosAdmin() {
    if (!esAdminActual || !listaUsuariosAdmin || cargandoUsuariosAdmin) return;

    cargandoUsuariosAdmin = true;
    listaUsuariosAdmin.innerHTML = "<p style='padding:10px;'>Cargando usuarios...</p>";
    actualizarResumenUsuarios(0, 0, 0);
    ocultarPaginacionUsuariosAdmin();

    try {
      const { data: perfiles, error: errorPerfiles } = await supabase
        .from("profiles")
        .select("id, usuario, activo, rol")
        .order("usuario", { ascending: true });

      if (errorPerfiles) {
        console.error("Error cargando usuarios:", errorPerfiles);
        renderErrorUsuarios(errorPerfiles);
        return;
      }

      const { data: registros, error: errorRegistros } = await supabase
        .from("registros_generacion")
        .select("user_id");

      if (errorRegistros) {
        console.error("Error cargando conteo de registros por usuario:", errorRegistros);
        renderErrorUsuarios(errorRegistros);
        return;
      }

      const conteo = {};
      (registros || []).forEach((item) => {
        const key = item.user_id;
        conteo[key] = (conteo[key] || 0) + 1;
      });

      const { data: instalaciones, error: errorInstalaciones } = await supabase
        .from("instalaciones_usuario")
        .select("id, user_id, installation_id, device_info, activo, created_at, updated_at")
        .eq("activo", true);

      if (errorInstalaciones) {
        console.error("Error cargando instalaciones por usuario:", errorInstalaciones);
        renderErrorUsuarios(errorInstalaciones);
        return;
      }

      const mapaInstalaciones = {};
      (instalaciones || []).forEach((instalacion) => {
        if (!instalacion || !instalacion.user_id) return;
        mapaInstalaciones[instalacion.user_id] = instalacion;
      });

      usuariosAdminOriginalCache = (perfiles || [])
        .filter((perfil) => String(perfil?.rol || "").toLowerCase() !== "admin")
        .map((perfil) => {
          const instalacion = mapaInstalaciones[perfil.id] || null;

          return {
            ...perfil,
            totalRegistros: conteo[perfil.id] || 0,
            tieneInstalacionActiva: !!instalacion,
            installation_id: instalacion ? instalacion.installation_id : "",
            device_info: instalacion ? instalacion.device_info : "",
            fecha_vinculacion: instalacion ? instalacion.created_at : "",
            fecha_vinculacion_texto: instalacion ? formatearCreatedAt(instalacion.created_at) : "-",
            instalacion_id_tabla: instalacion ? instalacion.id : ""
          };
        });

      aplicarFiltroUsuariosAdmin();
    } catch (err) {
      console.error("Error general cargando usuarios:", err);
      renderErrorUsuarios(err);
    } finally {
      cargandoUsuariosAdmin = false;
    }
  }

  function obtenerFechaSolo(valor) {
    if (!valor) return "";

    if (/^\d{4}-\d{2}-\d{2}$/.test(String(valor))) {
      return String(valor);
    }

    const fecha = new Date(valor);
    if (isNaN(fecha.getTime())) return "";

    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const dia = String(fecha.getDate()).padStart(2, "0");
    return `${anio}-${mes}-${dia}`;
  }

  function cumpleFiltroFechaActividad(valorFecha) {
    const fecha = obtenerFechaSolo(valorFecha);
    const desde = filtroFechaDesdeActividadAdmin ? String(filtroFechaDesdeActividadAdmin.value || "").trim() : "";
    const hasta = filtroFechaHastaActividadAdmin ? String(filtroFechaHastaActividadAdmin.value || "").trim() : "";

    if (!fecha) return !desde && !hasta;
    if (desde && fecha < desde) return false;
    if (hasta && fecha > hasta) return false;
    return true;
  }

  function obtenerHistorialActividadOrdenadoYFiltrado(userId, historial) {
    const orden = ordenActividadDetalleCache[userId] === "asc" ? "asc" : "desc";
    const items = Array.isArray(historial) ? historial.filter((fila) => cumpleFiltroFechaActividad(fila && fila.fecha_hora_ingreso)) : [];

    items.sort((a, b) => {
      const fechaA = a && a.fecha_hora_ingreso ? new Date(a.fecha_hora_ingreso).getTime() : 0;
      const fechaB = b && b.fecha_hora_ingreso ? new Date(b.fecha_hora_ingreso).getTime() : 0;
      return orden === "asc" ? fechaA - fechaB : fechaB - fechaA;
    });

    return items;
  }

  function obtenerEtiquetaOrdenActividad(userId) {
    return ordenActividadDetalleCache[userId] === "asc" ? "Orden: antiguos" : "Orden: recientes";
  }

  function obtenerHtmlDetalleActividad(item) {
    const userId = item.user_id;
    const historial = historialActividadCache[userId];
    const abierto = detalleActividadExpandidoUserId === userId;
    const textoBoton = abierto ? 'Ocultar detalle' : 'Ver detalle';

    let detalleHtml = '';

    if (abierto) {
      if (historial === null) {
        detalleHtml = '<div class="actividad-admin-detalle"><div class="actividad-admin-detalle-vacio">Cargando detalle...</div></div>';
      } else {
        const historialOrdenado = obtenerHistorialActividadOrdenadoYFiltrado(userId, historial);
        const etiquetaOrden = obtenerEtiquetaOrdenActividad(userId);
        const bloqueOrden = `
          <div style="display:flex; justify-content:flex-end; margin-bottom:10px;">
            <button type="button" class="btn-actividad-orden" data-user-id="${escapeHtml(userId)}" style="height:auto; min-height:40px; padding:10px 14px; border-radius:14px; background:#f3f4f6; color:#111827; box-shadow:0 4px 12px rgba(0,0,0,0.08); font-size:14px; font-weight:700;">${etiquetaOrden}</button>
          </div>
        `;

        if (!historialOrdenado.length) {
          detalleHtml = `<div class="actividad-admin-detalle">${bloqueOrden}<div class="actividad-admin-detalle-vacio">No hay ingresos detallados registrados</div></div>`;
        } else {
          detalleHtml = `
            <div class="actividad-admin-detalle">
              ${bloqueOrden}
              <div class="actividad-admin-detalle-lista">
                ${historialOrdenado.map((fila) => {
                  const fechaHora = fila.fecha_hora_ingreso ? formatearCreatedAt(fila.fecha_hora_ingreso) : '-';
                  return `<div class="actividad-admin-detalle-item">- ${fechaHora}</div>`;
                }).join('')}
              </div>
            </div>
          `;
        }
      }
    }

    return `
      <button type="button" class="btn-actividad-detalle" data-user-id="${escapeHtml(item.user_id)}">${textoBoton}</button>
      ${detalleHtml}
    `;
  }

  async function cargarHistorialActividadPorUsuario(userId) {
    historialActividadCache[userId] = null;
    renderizarActividadAdmin();

    try {
      const { data, error } = await supabase
        .from("actividad_sistema_historial")
        .select("id, user_id, fecha_hora_ingreso")
        .eq("user_id", userId)
        .order("fecha_hora_ingreso", { ascending: false });

      if (error) {
        console.error("Error cargando detalle de actividad:", error);
        historialActividadCache[userId] = [];
        renderizarActividadAdmin();
        return;
      }

      historialActividadCache[userId] = Array.isArray(data) ? data : [];
      renderizarActividadAdmin();
    } catch (error) {
      console.error("Error general cargando detalle de actividad:", error);
      historialActividadCache[userId] = [];
      renderizarActividadAdmin();
    }
  }

  async function toggleDetalleActividadAdmin(userId) {
    if (!userId) return;

    if (detalleActividadExpandidoUserId === userId) {
      detalleActividadExpandidoUserId = null;
      renderizarActividadAdmin();
      return;
    }

    detalleActividadExpandidoUserId = userId;

    if (!ordenActividadDetalleCache[userId]) {
      ordenActividadDetalleCache[userId] = "desc";
    }

    await cargarHistorialActividadPorUsuario(userId);
  }

  function renderizarActividadAdmin() {
    if (!listaActividadAdmin) return;

    const actividadFiltrada = actividadAdminCache.filter((item) => cumpleFiltroFechaActividad(item.ultima_conexion || item.fecha_ingreso));

    if (!actividadFiltrada.length) {
      listaActividadAdmin.innerHTML = '<div class="actividad-admin-vacio">No hay actividad registrada para ese filtro</div>';
      actualizarResumenActividad(0);
      return;
    }

    listaActividadAdmin.innerHTML = actividadFiltrada.map((item) => {
      const fechaIngreso = item.fecha_ingreso ? formatearFecha(item.fecha_ingreso) : '-';
      const horaIngreso = item.hora_ingreso || '-';
      const ultimaConexion = item.ultima_conexion ? formatearCreatedAt(item.ultima_conexion) : '-';

      return `
        <div class="tarjeta-actividad-admin">
          <div class="tarjeta-actividad-admin-texto">
            <div class="fila-info"><strong>Usuario:</strong> ${escapeHtml(item.usuario || '-')}</div>
            <div class="fila-info"><strong>Fecha de ingreso:</strong> ${fechaIngreso}</div>
            <div class="fila-info"><strong>Hora de ingreso:</strong> ${horaIngreso}</div>
            <div class="fila-info"><strong>Ultima conexion:</strong> ${ultimaConexion}</div>
            <div class="fila-info"><strong>Ingresos:</strong> ${Number(item.contador_ingresos || 0)}</div>
            ${obtenerHtmlDetalleActividad(item)}
          </div>
        </div>
      `;
    }).join('');

    actualizarResumenActividad(actividadFiltrada.length);
  }

  async function cargarActividadAdmin() {
    if (!esAdminActual || !listaActividadAdmin || cargandoActividadAdmin) return;

    cargandoActividadAdmin = true;
    listaActividadAdmin.innerHTML = '<div class="actividad-admin-cargando">Cargando actividad...</div>';
    actualizarResumenActividad(0);

    try {
      const { data: perfiles, error: errorPerfiles } = await supabase
        .from("profiles")
        .select("id, usuario, rol")
        .not("rol", "eq", "admin");

      if (errorPerfiles) {
        console.error("Error cargando perfiles para actividad:", errorPerfiles);
        listaActividadAdmin.innerHTML = '<div class="actividad-admin-error">No se pudo cargar la actividad del sistema</div>';
        return;
      }

      const mapaUsuarios = {};
      (perfiles || []).forEach((perfil) => {
        if (!perfil || !perfil.id) return;
        mapaUsuarios[perfil.id] = perfil.usuario || '';
      });

      const { data: actividad, error: errorActividad } = await supabase
        .from("actividad_sistema")
        .select("user_id, usuario, fecha_ingreso, hora_ingreso, ultima_conexion, contador_ingresos")
        .order("ultima_conexion", { ascending: false });

      if (errorActividad) {
        console.error("Error cargando actividad del sistema:", errorActividad);
        listaActividadAdmin.innerHTML = '<div class="actividad-admin-error">No se pudo cargar la actividad del sistema</div>';
        return;
      }

      actividadAdminCache = (actividad || [])
        .filter((item) => item && item.user_id && mapaUsuarios[item.user_id])
        .map((item) => ({
          ...item,
          usuario: mapaUsuarios[item.user_id] || item.usuario || '-',
          contador_ingresos: Number(item.contador_ingresos || 0)
        }));

      detalleActividadExpandidoUserId = null;
      historialActividadCache = {};
      ordenActividadDetalleCache = {};
      renderizarActividadAdmin();
    } catch (error) {
      console.error("Error general cargando actividad del sistema:", error);
      listaActividadAdmin.innerHTML = '<div class="actividad-admin-error">No se pudo cargar la actividad del sistema</div>';
      actualizarResumenActividad(0);
    } finally {
      cargandoActividadAdmin = false;
    }
  }

  async function enviarSolicitudAcceso() {
    const usuario = normalizarUsuarioSolicitud(usuarioSolicitud ? usuarioSolicitud.value : "");
    const clave = String(claveSolicitud ? claveSolicitud.value : "").trim();
    const nombreCompleto = String(nombreCompletoSolicitud ? nombreCompletoSolicitud.value : "").trim();

    if (!usuario || !clave || !nombreCompleto) {
      if (mensajeSolicitud) {
        mensajeSolicitud.textContent = "Complete usuario, clave y nombres completos";
        mensajeSolicitud.classList.remove("mensaje-solicitud-exito");
        mensajeSolicitud.classList.add("mensaje-solicitud-error");
      }
      return;
    }

    if (mensajeSolicitud) {
      mensajeSolicitud.textContent = "Enviando solicitud...";
      mensajeSolicitud.classList.remove("mensaje-solicitud-exito");
      mensajeSolicitud.classList.remove("mensaje-solicitud-error");
    }
    if (btnEnviarSolicitud) btnEnviarSolicitud.disabled = true;
    if (btnCancelarSolicitud) btnCancelarSolicitud.disabled = true;
    if (accionesSolicitudExito) accionesSolicitudExito.style.display = "none";

    try {
      const ahoraIso = new Date().toISOString();

      const { error: errorEliminarAnteriores } = await supabase
        .from("solicitudes_acceso")
        .delete()
        .eq("usuario", usuario)
        .eq("estado", "pendiente");

      if (errorEliminarAnteriores) {
        console.error("Error eliminando solicitudes pendientes anteriores:", errorEliminarAnteriores);
        if (mensajeSolicitud) {
          mensajeSolicitud.textContent = "No se pudo preparar la nueva solicitud";
          mensajeSolicitud.classList.remove("mensaje-solicitud-exito");
          mensajeSolicitud.classList.add("mensaje-solicitud-error");
        }
        return;
      }

      const payload = {
        usuario,
        clave,
        nombre_completo: nombreCompleto,
        estado: "pendiente",
        updated_at: ahoraIso
      };

      const { error } = await supabase
        .from("solicitudes_acceso")
        .insert([payload]);

      if (error) {
        console.error("Error enviando solicitud:", error);
        if (mensajeSolicitud) {
          mensajeSolicitud.textContent = "No se pudo enviar la solicitud";
          mensajeSolicitud.classList.remove("mensaje-solicitud-exito");
          mensajeSolicitud.classList.add("mensaje-solicitud-error");
        }
        return;
      }

      if (mensajeSolicitud) {
        mensajeSolicitud.textContent = "Su solicitud sera revisada dentro de las 24 horas a partir de este envio. Luego pruebe ingresar nuevamente.";
        mensajeSolicitud.classList.remove("mensaje-solicitud-error");
        mensajeSolicitud.classList.add("mensaje-solicitud-exito");
      }

      if (usuarioSolicitud) usuarioSolicitud.value = "";
      if (claveSolicitud) claveSolicitud.value = "";
      if (nombreCompletoSolicitud) nombreCompletoSolicitud.value = "";

      if (btnEnviarSolicitud) {
        btnEnviarSolicitud.disabled = true;
        btnEnviarSolicitud.style.display = "none";
      }

      if (btnCancelarSolicitud) {
        btnCancelarSolicitud.disabled = false;
        btnCancelarSolicitud.style.display = "none";
      }

      if (accionesSolicitudExito) {
        accionesSolicitudExito.style.display = "block";
      }

      if (esAdminActual) {
        await cargarSolicitudesAdmin();
      }
    } catch (err) {
      console.error("Error general enviando solicitud:", err);
      if (mensajeSolicitud) {
        mensajeSolicitud.textContent = "Ocurrio un error al enviar la solicitud";
        mensajeSolicitud.classList.remove("mensaje-solicitud-exito");
        mensajeSolicitud.classList.add("mensaje-solicitud-error");
      }
      if (btnEnviarSolicitud) btnEnviarSolicitud.disabled = false;
      if (btnCancelarSolicitud) btnCancelarSolicitud.disabled = false;
    } finally {
      if (btnEnviarSolicitud && btnEnviarSolicitud.style.display !== "none") {
        btnEnviarSolicitud.disabled = false;
      }
      if (btnCancelarSolicitud && btnCancelarSolicitud.style.display !== "none") {
        btnCancelarSolicitud.disabled = false;
      }
    }
  }

  async function aprobarSolicitudAdmin(solicitudId, nombreUsuario) {
    if (!esAdminActual) {
      mostrarMensaje("Solo el admin puede aprobar solicitudes");
      return;
    }

    if (!solicitudId) {
      mostrarMensaje("Solicitud invalida");
      return;
    }

    const confirmado = window.confirm(`Seguro que deseas aprobar la solicitud de ${nombreUsuario || "este usuario"}?`);
    if (!confirmado) return;

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData?.session?.access_token || "";

      if (!accessToken) {
        mostrarMensaje("No se pudo validar la sesion del admin");
        return;
      }

      const respuesta = await fetch(`${SUPABASE_URL}/functions/v1/aprobar-solicitud-acceso`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ solicitud_id: solicitudId })
      });

      let resultado = null;
      try {
        resultado = await respuesta.json();
      } catch (e) {
        resultado = null;
      }

      if (!respuesta.ok) {
        const mensaje = resultado?.error || resultado?.message || "No se pudo aprobar la solicitud";
        console.error("Error aprobando solicitud:", resultado || respuesta.statusText);
        mostrarMensaje(mensaje);
        return;
      }

      mostrarMensaje("Solicitud aprobada");
      await cargarSolicitudesAdmin();
      await cargarUsuariosAdmin();
    } catch (err) {
      console.error("Error general aprobando solicitud:", err);
      mostrarMensaje("Ocurrio un error al aprobar la solicitud");
    }
  }

  async function rechazarSolicitudAdmin(solicitudId, nombreUsuario) {
    if (!esAdminActual) {
      mostrarMensaje("Solo el admin puede rechazar solicitudes");
      return;
    }

    if (!solicitudId) {
      mostrarMensaje("Solicitud invalida");
      return;
    }

    const confirmado = window.confirm(`Seguro que deseas rechazar la solicitud de ${nombreUsuario || "este usuario"}?`);
    if (!confirmado) return;

    try {
      const { error } = await supabase
        .from("solicitudes_acceso")
        .update({ estado: "rechazado", updated_at: new Date().toISOString() })
        .eq("id", solicitudId);

      if (error) {
        console.error("Error rechazando solicitud:", error);
        mostrarMensaje("No se pudo rechazar la solicitud");
        return;
      }

      mostrarMensaje("Solicitud rechazada");
      await cargarSolicitudesAdmin();
    } catch (err) {
      console.error("Error general rechazando solicitud:", err);
      mostrarMensaje("Ocurrio un error al rechazar la solicitud");
    }
  }

  async function desvincularDispositivoAdmin(userId, nombreUsuario) {
    if (!esAdminActual) {
      mostrarMensaje("Solo el admin puede desvincular dispositivos");
      return;
    }

    if (!userId) {
      mostrarMensaje("Usuario invalido");
      return;
    }

    const confirmado = window.confirm(`Seguro que deseas desvincular el dispositivo de ${nombreUsuario || "este usuario"}?`);

    if (!confirmado) return;

    try {
      const adminUser = await obtenerUsuarioActual();
      const payload = {
        activo: false,
        desenlazado_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      if (adminUser && adminUser.id) {
        payload.desenlazado_por = adminUser.id;
      }

      const { data, error } = await supabase
        .from("instalaciones_usuario")
        .update(payload)
        .eq("user_id", userId)
        .eq("activo", true)
        .select("id, user_id, activo");

      if (error) {
        console.error("Error desenlazando dispositivo:", error);
        mostrarMensaje("No se pudo desvincular el dispositivo");
        return;
      }

      if (!data || data.length === 0) {
        mostrarMensaje("Ese usuario no tiene dispositivo activo vinculado");
        return;
      }

      mostrarMensaje("Dispositivo desenlazado");
      await cargarUsuariosAdmin();
    } catch (err) {
      console.error("Error general desenlazando dispositivo:", err);
      mostrarMensaje("Ocurrio un error al desvincular el dispositivo");
    }
  }

  async function actualizarEstadoUsuarioAdmin(userId, nuevoEstado, nombreUsuario) {
    if (!esAdminActual) {
      mostrarMensaje("Solo el admin puede gestionar usuarios");
      return;
    }

    if (!userId) {
      mostrarMensaje("Usuario invalido");
      return;
    }

    const accionTexto = nuevoEstado ? "activar" : "desactivar";
    const confirmado = window.confirm(`Seguro que deseas ${accionTexto} al usuario ${nombreUsuario || ""}?`);

    if (!confirmado) return;

    try {
      const { data, error } = await supabase
        .from("profiles")
        .update({ activo: nuevoEstado })
        .eq("id", userId)
        .select("id, usuario, activo")
        .maybeSingle();

      if (error) {
        console.error("Error actualizando estado del usuario:", error);
        mostrarMensaje("No se pudo actualizar el usuario");
        return;
      }

      if (!data) {
        console.warn("No se actualizo ninguna fila. Revisa RLS/policies.");
        mostrarMensaje("No se actualizo el usuario. Revisa policies de Supabase.");
        return;
      }

      if (perfilActual && perfilActual.id === userId && nuevoEstado === false) {
        mostrarMensaje("Te desactivaste a ti mismo");
      } else {
        mostrarMensaje(`Usuario ${nuevoEstado ? "activado" : "desactivado"}`);
      }

      await cargarUsuariosAdmin();
      await cargarHistorialAdmin();
    } catch (err) {
      console.error("Error general actualizando usuario:", err);
      mostrarMensaje("Ocurrio un error al actualizar el usuario");
    }
  }

  async function eliminarRegistroAdmin(registroId, storagePath) {
    if (!esAdminActual) {
      mostrarMensaje("Solo el admin puede eliminar");
      return;
    }

    if (!registroId) {
      mostrarMensaje("Registro invalido");
      return;
    }

    const confirmado = window.confirm("Seguro que deseas eliminar esta imagen y su registro?");
    if (!confirmado) return;

    try {
      if (storagePath) {
        const { error: errorStorage } = await supabase.storage
          .from("imagenes-generadas")
          .remove([storagePath]);

        if (errorStorage) {
          console.error("Error eliminando imagen de Storage:", errorStorage);
          mostrarMensaje("Fallo al eliminar la imagen del storage");
          return;
        }
      }

      const { error: errorDelete } = await supabase
        .from("registros_generacion")
        .delete()
        .eq("id", registroId);

      if (errorDelete) {
        console.error("Error eliminando registro:", errorDelete);
        mostrarMensaje("Fallo al eliminar el registro");
        return;
      }

      mostrarMensaje("Registro eliminado");
      await cargarHistorialAdmin();
      await cargarUsuariosAdmin();
    } catch (err) {
      console.error("Error general eliminando registro:", err);
      mostrarMensaje("Ocurrio un error al eliminar");
    }
  }

  if (btnRecargarHistorial) {
    btnRecargarHistorial.addEventListener("click", async () => {
      if (!esAdminActual) {
        mostrarMensaje("Solo el admin puede ver el historial");
        return;
      }

      paginaActualAdmin = 1;
      await cargarHistorialAdmin();
    });
  }

  if (btnRecargarUsuariosAdmin) {
    btnRecargarUsuariosAdmin.addEventListener("click", async () => {
      if (!esAdminActual) {
        mostrarMensaje("Solo el admin puede ver usuarios");
        return;
      }

      await cargarUsuariosAdmin();
    });
  }

  if (btnRecargarSolicitudesAdmin) {
    btnRecargarSolicitudesAdmin.addEventListener("click", async () => {
      if (!esAdminActual) {
        mostrarMensaje("Solo el admin puede ver solicitudes");
        return;
      }

      await cargarSolicitudesAdmin();
    });
  }

  if (btnPaginaAnterior) {
    btnPaginaAnterior.addEventListener("click", () => {
      if (paginaActualAdmin <= 1) return;
      paginaActualAdmin--;
      renderizarPaginaActualAdmin();
    });
  }

  if (btnPaginaSiguiente) {
    btnPaginaSiguiente.addEventListener("click", () => {
      const totalPaginas = Math.max(1, Math.ceil(registrosAdminCache.length / REGISTROS_POR_PAGINA));
      if (paginaActualAdmin >= totalPaginas) return;
      paginaActualAdmin++;
      renderizarPaginaActualAdmin();
    });
  }

  if (filtroUsuarioAdmin) {
    filtroUsuarioAdmin.addEventListener("input", () => {
      aplicarFiltrosAdmin();
    });
  }

  if (filtroFechaDesdeAdmin) {
    filtroFechaDesdeAdmin.addEventListener("change", () => {
      aplicarFiltrosAdmin();
    });
  }

  if (filtroFechaHastaAdmin) {
    filtroFechaHastaAdmin.addEventListener("change", () => {
      aplicarFiltrosAdmin();
    });
  }

  if (filtroFechaAdmin) {
    filtroFechaAdmin.addEventListener("change", () => {
      aplicarFiltrosAdmin();
    });
  }

  if (btnLimpiarFiltrosAdmin) {
    btnLimpiarFiltrosAdmin.addEventListener("click", () => {
      limpiarFiltrosAdminUI();
      aplicarFiltrosAdmin();
    });
  }

  if (filtroUsuarioPanelAdmin) {
    filtroUsuarioPanelAdmin.addEventListener("input", () => {
      aplicarFiltroUsuariosAdmin();
    });
  }

  if (btnLimpiarUsuariosAdmin) {
    btnLimpiarUsuariosAdmin.addEventListener("click", () => {
      limpiarBusquedaUsuariosAdminUI();
      aplicarFiltroUsuariosAdmin();
    });
  }

  if (historialAdmin) {
    historialAdmin.addEventListener("click", async (e) => {
      const botonDescargarRegistro = e.target.closest(".btn-descargar-registro");
      if (botonDescargarRegistro) {
        const url = botonDescargarRegistro.getAttribute("data-url") || "";
        const nombre = botonDescargarRegistro.getAttribute("data-nombre") || "imagen.jpg";
        await descargarImagenDesdeUrl(url, nombre);
        return;
      }

      const botonEliminar = e.target.closest(".btn-eliminar-registro");
      if (!botonEliminar) return;

      const registroId = botonEliminar.getAttribute("data-id");
      const storagePath = botonEliminar.getAttribute("data-storage-path") || "";

      await eliminarRegistroAdmin(registroId, storagePath);
    });
  }

  if (listaUsuariosAdmin) {
    listaUsuariosAdmin.addEventListener("click", async (e) => {
      const botonDesvincular = e.target.closest(".btn-desvincular-dispositivo-admin");
      if (botonDesvincular) {
        const userId = botonDesvincular.getAttribute("data-id") || "";
        const nombreUsuario = botonDesvincular.getAttribute("data-usuario") || "";
        await desvincularDispositivoAdmin(userId, nombreUsuario);
        return;
      }

      const botonToggle = e.target.closest(".btn-toggle-usuario-admin");
      if (!botonToggle) return;

      const userId = botonToggle.getAttribute("data-id") || "";
      const activoActual = botonToggle.getAttribute("data-activo") === "true";
      const nombreUsuario = botonToggle.getAttribute("data-usuario") || "";

      await actualizarEstadoUsuarioAdmin(userId, !activoActual, nombreUsuario);
    });
  }

  if (listaSolicitudesAdmin) {
    listaSolicitudesAdmin.addEventListener("click", async (e) => {
      const botonAprobar = e.target.closest(".btn-aprobar-solicitud-admin");
      if (botonAprobar) {
        const solicitudId = botonAprobar.getAttribute("data-id") || "";
        const nombreUsuario = botonAprobar.getAttribute("data-usuario") || "";
        await aprobarSolicitudAdmin(solicitudId, nombreUsuario);
        return;
      }

      const botonRechazar = e.target.closest(".btn-rechazar-solicitud-admin");
      if (!botonRechazar) return;

      const solicitudId = botonRechazar.getAttribute("data-id") || "";
      const nombreUsuario = botonRechazar.getAttribute("data-usuario") || "";
      await rechazarSolicitudAdmin(solicitudId, nombreUsuario);
    });
  }

  if (botonGenerar) {
    botonGenerar.addEventListener("click", function () {
      const archivo = inputFoto && inputFoto.files ? inputFoto.files[0] : null;

      if (!archivo) {
        mostrarMensaje("Selecciona una foto primero");
        return;
      }

      const lector = new FileReader();

      lector.onload = function (evento) {
        const imagen = new Image();

        imagen.onload = function () {
          canvas.width = 1080;
          canvas.height = 720;

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          ctx.save();
          ctx.scale(-1, 1);
          ctx.drawImage(
            imagen,
            -canvas.width,
            0,
            canvas.width,
            canvas.height
          );
          ctx.restore();

          ctx.save();
          ctx.globalAlpha = 0.06;
          ctx.filter = "blur(0.35px)";
          ctx.drawImage(canvas, 0, 0);
          ctx.restore();
          ctx.filter = "none";
          ctx.globalAlpha = 1;

          const coordenadas = inputCoordenadas ? inputCoordenadas.value.trim() : "";
          const fecha = inputFecha ? formatearFecha(inputFecha.value.trim()) : "";
          const hora = inputHora ? inputHora.value.trim() : "";
          const ubicacion = inputUbicacion ? inputUbicacion.value.trim().toUpperCase() : "";

          ctx.font = `${TEXT_SIZE}px sans-serif`;

          const linea1 = "   CREADO POR:  SUTRAN";
          const linea2 = "   COORDENADAS: " + coordenadas;
          const linea3Completa = "   " + ubicacion + " - FECHA: " + fecha + " " + hora;

          const maxAnchoTexto = canvas.width - 10;
          const linea3 = limitarTextoSinPuntos(linea3Completa, maxAnchoTexto);

          const x = 0;
          const y1 = canvas.height - 40;
          const y2 = canvas.height - 25;
          const y3 = canvas.height - 10;

          dibujarLineaAPK(linea1, x, y1);
          dibujarLineaAPK(linea2, x, y2);
          dibujarLineaAPK(linea3, x, y3);

          dataUrlGeneradaActual = canvas.toDataURL("image/jpeg", 0.95);
          imagenListaParaGuardar = true;
          guardandoEnSupabase = false;
          ultimoStoragePathGuardado = null;
          ultimaPublicUrlGuardada = null;

          if (botonDescargar) {
            botonDescargar.disabled = false;
            botonDescargar.style.background = "#4b79bb";
          }
        };

        imagen.src = evento.target.result;
      };

      lector.readAsDataURL(archivo);
    });
  }

  if (botonDescargar) {
    botonDescargar.addEventListener("click", async function () {
      if (botonDescargar.disabled) {
        mostrarMensaje("Primero genera la imagen");
        return;
      }

      const dataURLFinal = dataUrlGeneradaActual || canvas.toDataURL("image/jpeg", 0.95);

      const link = document.createElement("a");
      link.download = "registro_fotografico.jpg";
      link.href = dataURLFinal;
      link.click();

      if (!imagenListaParaGuardar) return;
      if (guardandoEnSupabase) return;

      guardandoEnSupabase = true;

      const guardadoOk = await subirImagenDescargadaYGuardarRegistro(dataURLFinal);

      if (guardadoOk) {
        imagenListaParaGuardar = false;
        mostrarMensaje("Imagen descargada y guardada");
      }

      guardandoEnSupabase = false;
    });
  }

  limpiarCanvas();
  revisarSesion();

  setTimeout(() => {
    mostrarBody();
  }, 1500);
});