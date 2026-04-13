//participacion
export const rParticipacionContent = `<div class="titulos col-xs-12">
                    <div class="col-xs-11">
                      <h3> <span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" style="font-size:19px"></span> SEGUNDA ELECCIÓN PRESIDENCIAL 2016: PARTICIPACIÓN CIUDADANA</h3>
                    </div>
                    <div class="col-xs-1 oculto-boton-print">
                      <button onclick="printContent('impreso');"><i class="fa fa-print ico-print"></i></button>
                    </div>
                  </div>
                  <div class="col-xs-12">
                    <p class="subtitle">ACTAS CONTABILIZADAS</p>
                    <div class="col-lg-7 centered">
                      <div class="col-xs-12 col-md-12 col-lg-12 cont-curv">
                        <div class="col-xs-3 col-md-1">
                          <span class="glyphicon glyphicon-ok-circle ico-info" aria-hidden="true"></span>
                        </div>
                        <div class="col-xs-9 col-md-11">
                          <ul>
                            <li>ACTUALIZADO EL 20/06/2016 A LAS 19:16 h </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                  <div class="col-xs-12 line pbot30">
                    <div class="col-xs-12 col-md-6">
                      <img src="images/estadistico.png?_tot_participacion=80.093&amp;_tot_ausentismo=19.907" class="img-responsive">
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <p class="subtitle">ELECTORES HÁBILES 22,901,954</p>
                      <div id="page-wrap">
                        <table class="table09_2" cellspacing="0">
                          <thead>
                            <tr>
                              <th>PARTICIPACIÓN</th>
                              <th>AUSENTISMO</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>TOTAL: 18,342,896</td>
                              <td>TOTAL: 4,559,058</td>
                            </tr>
                            <tr>
                              <td>% TOTAL: 80.093%</td>
                              <td>% TOTAL: 19.907%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-xs-12 pbot30 ptop20">
                    <div class="col-xs-12 col-md-6">
                      <a href="#" id="renderVotosE"><img src="images/icono_extranjero.jpg" class="img-responsive"></a>
                    </div>
                    <div class="col-xs-12 col-md-6">
                      <a href="#" id="renderVotosN"><img src="images/icono_nacional.jpg" class="img-responsive"></a>
                    </div>
                  </div>`;

export const rParticipacionMenu = 
                `<ul>
                    <li><a href="participacion.html" class="act-izq">TOTAL</a></li>
                </ul>`;

const tableTemplante = (votos) => {
    var templante = ``;

    if(votos == null)
      return templante;
    
    votos.forEach( voto => {
        templante += `<tr class="rowVotes" data-nombre="${voto.DPD}" data-nivel="${voto.nivel}" data-provincia="${voto.Provincia ? voto.Provincia : '' }">
                        <td>${voto.DPD}</td>
                        <td>${voto.TV}</td>
                        <td>${voto.PTV}</td>
                        <td>${voto.TA}</td>
                        <td>${voto.PTA}</td>
                        <td>${voto.EH}</td>
                    </tr>`
    } )

    return templante;
}

export const rParticipacionVotos = (votos, detalle, total) => {
    var html = `<div class="titulos col-xs-12">
                  <div class="col-xs-11">
                    <h3> <span class="glyphicon glyphicon-circle-arrow-right" aria-hidden="true" style="font-size:19px"></span> SEGUNDA ELECCIÓN PRESIDENCIAL 2016: PARTICIPACIÓN CIUDADANA</h3>
                  </div>

                  <div class="col-xs-1 oculto-boton-print">
                    <button onclick="printContent('impreso');"><i class="fa fa-print ico-print"></i></button>
                  </div>
                </div>

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <button type="button" class="btn btn-primary" onclick="history.go(-1);"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> REGRESAR</button>
                      </td>
                      <td width="60%">&nbsp;</td>
                      <td>
                        <button type="button" class="btn btn-primary" onclick="location.href='./generar_datos_participacion_excel.php?tipoCobertura=Nacional&amp;ubigeo=Todos'">REPORTE DETALLADO EN EXCEL</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                          
                <div class="col-xs-12">
                  <p class="subtitle">ACTAS CONTABILIZADAS</p>
                  <div class="col-lg-7 centered">
                    <div class="col-xs-12 col-md-12 col-lg-12 cont-curv">
                      <div class="col-xs-3 col-md-1">
                        <span class="glyphicon glyphicon-ok-circle ico-info" aria-hidden="true"></span>
                      </div>

                      <div class="col-xs-9 col-md-11">
                        <ul>
                          <li>ACTUALIZADO EL 20/06/2016 A LAS 19:16 h </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <br/>
                </div>

                <div class="col-xs-12 line pbot30">
                  <div class="col-xs-12 col-md-6">
                    <img src="" class="img-responsive">
                  </div>

                  <div class="col-xs-12 col-md-6">
                    <div class="cont-recto" style="margin-bottom:10px">
                      Ámbito: Nacional
                    </div>
                    <p class="subtitle">ELECTORES HÁBILES ${total.EH}</p>
                    <div id="page-wrap">
                      <table class="table09_2" cellspacing="0">
                        <thead>
                          <tr>
                            <th>PARTICIPACIÓN</th>
                            <th>AUSENTISMO</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>TOTAL: ${total.TV}</td>
                            <td>TOTAL: ${total.TA}</td>
                          </tr>
                          <tr>
                            <td>% TOTAL: ${total.PTV}</td>
                            <td>% TOTAL: ${total.PTA}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
                
                <div class="col-xs-12">
                  <p class="subtitle">Consulta de participación DETALLADO </p>
                  <div id="page-wrap">
                    <table class="table21">
                      <tbody id="resultados">
                        <tr class="titulo_tabla">
                          <td>${detalle}</td>
                          <td>TOTAL ASISTENTES</td>
                          <td>% TOTAL ASISTENTES</td>
                          <td>TOTAL AUSENTES</td>
                          <td>% TOTAL AUSENTES</td>
                          <td>ELECTORES HÁBILES</td>
                        </tr>
                        ${
                            tableTemplante(votos)
                        }
                      </tbody>
                    </table>
                  </div>
                </div>`

    return html;
}

//actas

export const aTemplate = (grupo) => {
  return `
  <td bgcolor="#C1C1C1" style="cursor:pointer"><a href="#" id="rowVotes" data-id="${grupo.idGrupoVotacion}">${grupo.idGrupoVotacion}</a></td>
  `
}

export const renderGrupoDetalle = (grupo, ubigeo) => {
  return `
                                    <div class="tab-info-desc">             
                                      <div class="row">
                                        <div class="col-xs-3 col-md-4">
                                          <div class="mesap01">
                                            <img src="images/mp-sin.jpg" class="img-responsive">
                                            Si requiere la imagen del acta, solicítela a través del procedimiento de acceso a la información pública.
                                          </div>
                                        </div>
                                        <div class="col-xs-9 col-md-8">
                                          <div class="row">
                                            
                                            <div class="col-xs-12">
                                              <p class="subtitle1">ACTA ELECTORAL</p>
                                              <div id="page-wrap">
                                                <table class="table13" cellspacing="0">
                                                  <thead>
                                                    <tr>
                                                      <th>Mesa N°</th>
                                                      <th>N° Copia</th>
                                                    </tr>
                                                  </thead>
                                                  <tbody>
                                                    <tr>
                                                      <td>${grupo.idGrupoVotacion}</td>
                                                      <td>${grupo.nCopia}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                
                                            <div class="col-xs-12">
                                              <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                                              <div id="page-wrap">
                                                <table class="table14" cellspacing="0">
                                                  <tbody>
                                                    <tr class="titulo_tabla">
                                                      <td>${ubigeo[0] == "nacional" ? "Departamento" : "Continente"}</td>
                                                      <td>${ubigeo[0] == "nacional" ? "Provincia": "Pais"}</td>
                                                      <td>${ubigeo[0] == "nacional" ? "Distrito": "Ciudad"}</td>
                                                      <td>Local de votación</td>
                                                      <td>Dirección</td>
                                                    </tr>
                                                    <tr>
                                                      <td>${ubigeo[1]}</td>
                                                      <td>${ubigeo[2]}</td>
                                                      <td>${ubigeo[3]}</td>
                                                      <td>${"falta ingresar Local"}</td>
                                                      <td>${"falta ingresar Dirección"}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>
                                            
                                            <div class="col-xs-12">
                                              <p class="subtitle1">INFORMACIÓN MESA</p>
                                              <div id="page-wrap">
                                                <table class="table15" cellspacing="0">
                                                  <tbody>
                                                    <tr class="titulo_tabla">
                                                      <td>Electores hábiles</td>
                                                      <td>Total votantes</td>
                                                      <td>Estado del acta</td>
                                                    </tr>
                                                    <tr>
                                                      <td>${grupo.ElectoresHabiles}</td>
                                                      <td>${grupo.TotalVotantes}</td>
                                                      <td>${grupo.idEstadoActa ? "ACTA ELECTORAL NORMAL" : "ACTA SIN PROCESAR"}</td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                              </div>
                                            </div>

                                          </div>
                                        </div>
                                      </div>
                                
                                      <div>
                                        <div class="col-xs-12 pbot30_acta">
                                          <p class="subtitle1">LISTA DE RESOLUCIONES</p>
                                          <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> No hay resoluciones para el acta seleccionada
                                          <div id="page-wrap">
                                            <div class="col-md-12 resolu"></div>
                                          </div>
                                          <!-- <p class="centro"># : El valor consignado en el acta presenta ilegibilidad.</p> -->
                                        </div>
                                      </div>
                                
                                      <div>
                                        <div class="col-xs-12">
                                          <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                                          <div id="page-wrap" class="cont-tabla1">
                                            <table class="table06">
                                              <tbody>
                                                <tr class="titulo_tabla">
                                                  <td colspan="2">Organización política</td>
                                                  <td>Total de Votos</td>
                                                </tr>
                                                  <td>PERUANOS POR EL KAMBIO</td>
                                                  <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                                                  <td>${grupo.P1}</td>
                                                </tr>
                                                <tr>
                                                  <td>FUERZA POPULAR</td>
                                                  <td><img width="40px" height="40px" src="images/simbolo_pkk.jpg"></td>
                                                  <td>${grupo.P2}</td>
                                                </tr>
                                                <tr>
                                                  <td colspan="2">VOTOS EN BLANCO</td>
                                                  <td>${grupo.VotosBlancos}</td>
                                                </tr>
                                                <tr>
                                                  <td colspan="2">VOTOS NULOS</td>
                                                  <td>${grupo.VotosNulos}</td>
                                                </tr>
                                                <tr>
                                                  <td colspan="2">VOTOS IMPUGNADOS</td>
                                                  <td>${grupo.VotosImpugnados}</td>
                                                </tr>
                                                <tr>
                                                  <td colspan="2">TOTAL DE  VOTOS EMITIDOS</td>
                                                  <td>${grupo.TotalVotantes}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
  `

}