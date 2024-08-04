export enum States {
    Acre = "Acre",
    Alagoas = "Alagoas",
    Amapa = "Amapá",
    Amazonas = "Amazonas",
    Bahia = "Bahia",
    Ceara = "Ceará",
    DistritoFederal = "Distrito Federal",
    EspiritoSanto = "Espírito Santo",
    Goias = "Goiás",
    Maranhao = "Maranhão",
    MatoGrosso = "Mato Grosso",
    MatoGrossoDoSul = "Mato Grosso do Sul",
    MinasGerais = "Minas Gerais",
    Para = "Pará",
    Paraiba = "Paraíba",
    Parana = "Paraná",
    Pernambuco = "Pernambuco",
    Piaui = "Piauí",
    RioDeJaneiro = "Rio de Janeiro",
    RioGrandeDoNorte = "Rio Grande do Norte",
    RioGrandeDoSul = "Rio Grande do Sul",
    Rondonia = "Rondônia",
    Roraima = "Roraima",
    SantaCatarina = "Santa Catarina",
    SaoPaulo = "São Paulo",
    Sergipe = "Sergipe",
    Tocantins = "Tocantins"
  }

  export function getStateName(state: States): string {
    return state;
  }