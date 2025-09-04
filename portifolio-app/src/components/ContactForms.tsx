"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForms() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const webhookUrl = "https://discord.com/api/webhooks/1413136049311584276/FUllP5C9-gBEHjkvRalmpM0CpW_845g0XoZa-9gXljyZaoq2fU-GhFfpcUc6zBoBg2vQ";

        const payload = {
        embeds: [
            {
            title: "📩 Nova mensagem de contato",
            color: 0x9b59b6, // Roxo
            fields: [
                { name: "👤 Nome", value: form.name, inline: false },
                { name: "📧 Email", value: form.email, inline: false },
                { name: "💬 Mensagem", value: form.message, inline: false },
            ],
            footer: {
                text: "Formulário do portfólio",
            },
            timestamp: new Date().toISOString(),
            },
        ],
        };

        try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        toast.success("Mensagem enviada com sucesso! 🚀")
        setForm({ name: "", email: "", message: "" });
        } catch (error) {
        toast.error("Erro ao enviar a mensagem! 🚀")
        console.error(error);
        }
    };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-gray-900 border border-purple-500/50 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
        Entre em Contato
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5 w-md flex flex-col items-center">
        {/* Nome */}
        <div className="flex flex-col items-start w-sm">
          <label htmlFor="name" className="flex text-sm text-start font-semibold text-gray-300 mb-1 ml-2 items-start">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-sm px-4 py-2 rounded-lg bg-gray-800 text-gray-200 border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1 ml-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-sm px-4 py-2 rounded-lg bg-gray-800 text-gray-200 border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        {/* Mensagem */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1 ml-2">
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            className="w-sm px-4 py-2 rounded-lg bg-gray-800 text-gray-200 border border-green-500/30 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>

        {/* Botão */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-semibold bg-purple-600 text-white hover:bg-purple-500 shadow-md hover:shadow-purple-500/30 transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </motion.div>
  );
}
