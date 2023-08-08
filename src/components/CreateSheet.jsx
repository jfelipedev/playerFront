import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
        });      
        setTimeout(() => {
          navigate("/");
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
          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-success w-100 rounded-0">
              Criar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateSheet;
