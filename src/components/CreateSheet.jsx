import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";

const CreateSheet = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    login: "",
    nome: "",
    imgURL: "",
    classe: "",
    level: "",
    life: "",
    mana: "",
    exp: "",
    forca: "",
    destreza: "",
    vitalidade: "",
    inteligencia: "",
    defesa: "",
    habilidade: "",
    sabedoria: "",
    backpack: "",
    gp: "",
    platinum: "",
    crystal: "",
    vantagens: "",
    desvantagens: "",
    historia: "",
    anotacoes: "",
    set: "",
    shield: "",
    weapon: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sheets-api-psi.vercel.app/userData",
        values
      );

      if (response.status === 201) {
        Swal.fire("Feito!", "Ficha Criada", "success");
        setValues({
          login: "",
          nome: "",
          level: "",
          forca: "",
          destreza: "",
          vitalidade: "",
          inteligencia: "",
          defesa: "",
          habilidade: "",
          sabedoria: "",
          vantagens: "",
          desvantagens: "",
          historia: "",
          gp: "",
          platinum: "",
          crystal: "",
        });
        setTimeout(() => {
          navigate("/playerFront");
        }, 2000);
      } else {
        console.log("Algo deu errado!");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Create Character</h2>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="login">
                <strong>Login</strong> <br />
              </label>
              <input
                type="text"
                name="login"
                placeholder="Login"
                className="form-control rounded-0"
                value={values.login}
                required
                onChange={(e) =>
                  setValues({ ...values, login: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="nome">
                <strong>Nome do Personagem</strong> <br />
              </label>
              <input
                type="text"
                name="nome"
                value={values.nome}
                placeholder="Nome do Personagem"
                className="form-control rounded-0"
                required
                onChange={(e) => setValues({ ...values, nome: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="level">
                <strong>Level</strong> <br />
              </label>
              <input
                type="text"
                name="level"
                value={values.level}
                placeholder="Level"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, level: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="forca">
                <strong>Força</strong> <br />
              </label>
              <input
                type="text"
                name="forca"
                value={values.forca}
                placeholder="Força"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, forca: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="destreza">
                <strong>Destreza</strong> <br />
              </label>
              <input
                type="text"
                name="destreza"
                value={values.destreza}
                placeholder="Destreza"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, destreza: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="vitalidade">
                <strong>Vitalidade</strong> <br />
              </label>
              <input
                type="text"
                name="vitalidade"
                value={values.vitalidade}
                placeholder="Vitalidade"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, vitalidade: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="inteligencia">
                <strong>Inteligência</strong> <br />
              </label>
              <input
                type="text"
                name="inteligencia"
                value={values.inteligencia}
                placeholder="Inteligência"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, inteligencia: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="defesa">
                <strong>Defesa</strong> <br />
              </label>
              <input
                type="text"
                name="defesa"
                value={values.defesa}
                placeholder="Defesa"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, defesa: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="habilidade">
                <strong>Habilidade</strong> <br />
              </label>
              <input
                type="text"
                name="habilidade"
                value={values.habilidade}
                placeholder="Habilidade"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, habilidade: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="sabedoria">
                <strong>Sabedoria</strong> <br />
              </label>
              <input
                type="text"
                name="sabedoria"
                value={values.sabedoria}
                placeholder="Sabedoria"
                className="form-control rounded-0"
                required
                onChange={(e) =>
                  setValues({ ...values, sabedoria: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="vantagens">
                <strong>Vantagens</strong> <br />
              </label>
              <textarea
                name="vantagens"
                placeholder="Vantagens"
                className="form-control rounded-0"
                value={values.vantagens}
                required
                onChange={(e) =>
                  setValues({ ...values, vantagens: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="desvantagens">
                <strong>Desvantagens</strong> <br />
              </label>
              <textarea
                name="desvantagens"
                placeholder="Desvantagens"
                className="form-control rounded-0"
                value={values.desvantagens}
                onChange={(e) =>
                  setValues({ ...values, desvantagens: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="historia">
                <strong>História</strong> <br />
              </label>
              <textarea
                name="historia"
                placeholder="História"
                className="form-control rounded-0"
                required
                value={values.historia}
                onChange={(e) =>
                  setValues({ ...values, historia: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gp">
                <strong>Gold Coins</strong> <br />
              </label>
              <textarea
                name="gp"
                placeholder="Gold Coins"
                className="form-control rounded-0"
                value={values.gp}
                onChange={(e) => setValues({ ...values, gp: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="platinum">
                <strong>Platinum Coins</strong> <br />
              </label>
              <textarea
                name="platinum"
                placeholder="Platinum Coins"
                className="form-control rounded-0"
                value={values.platinum}
                onChange={(e) =>
                  setValues({ ...values, platinum: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label htmlFor="crystal">
                <strong>Crystal Coins</strong> <br />
              </label>
              <textarea
                name="crystal"
                placeholder="Crystal Coins"
                className="form-control rounded-0"
                value={values.crystal}
                onChange={(e) =>
                  setValues({ ...values, crystal: e.target.value })
                }
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <button style={{ marginRight: "20px" }} className="home-button" type="submit">
                Criar
              </button>
              <Link to="/playerFront">
                <button className="home-button">Voltar</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSheet;
