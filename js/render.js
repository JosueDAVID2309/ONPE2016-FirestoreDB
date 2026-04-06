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

