---
title: "Exercise G357: Cusp Widths as Stabilizer Indices"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.4, Exercise 2.4.4, printed p. 62, PDF p. 77; cusp width definition, printed pp. 59–60, PDF pp. 74–75"
source_refs:
  - "S7/ch-2/sec-4/ex-4"
created: 2026-10-28
---

# Exercise G357: Cusp Widths as Stabilizer Indices

## Problem Statement

> [!question] Original Exercise 2.4.4
> (a) Show that the width $h_s$ is finite. (Hints for this exercise are at the end of the book.)
>
> (b) Show that $h_s=|SL_2(\mathbb Z)_s/\{\pm I\}\Gamma_s|$.
>
> (c) Show that if $s\in\mathbb Q\cup\{\infty\}$ and $\gamma\in SL_2(\mathbb Z)$ then the width of $\gamma(s)$ under $\gamma\Gamma\gamma^{-1}$ is the same as the width of $s$ under $\Gamma$.
>
> **Referenced definition.** Put $G=SL_2(\mathbb Z)$ and let $\Gamma$ be a congruence subgroup. A subscript $s$ denotes a stabilizer. Choose $\delta\in G$ with $\delta(s)=\infty$ and define
> $$
> h_s=[G_\infty:(\delta\{\pm I\}\Gamma\delta^{-1})_\infty].
> $$
> With $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, the stabilizer $G_\infty$ is $\{\pm T^n:n\in\mathbb Z\}$.

## Hints

> [!hint]- Hint 1
> If $\Gamma(N)\subseteq\Gamma$, normality of $\Gamma(N)$ gives $T^N\in\delta\Gamma\delta^{-1}$.

> [!hint]- Hint 2
> Conjugation by $\delta$ identifies the two stabilizers in part (b). Conjugation by $\gamma$ gives the corresponding identifications in part (c).

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution using subgroup indices and conjugation.
>
> **(a).** Choose $N\geq1$ with $\Gamma(N)\subseteq\Gamma$. Reduction modulo $N$ shows that $\Gamma(N)$ is normal in $G$. Since $T^N\in\Gamma(N)$, we obtain
> $$
> T^N\in\Gamma(N)=\delta\Gamma(N)\delta^{-1}
> \subseteq\delta\Gamma\delta^{-1}.
> $$
> Thus the subgroup $H=(\delta\{\pm I\}\Gamma\delta^{-1})_\infty$ contains $\{\pm T^{Nk}:k\in\mathbb Z\}$. The homomorphism
> $$
> G_\infty\longrightarrow\mathbb Z,\qquad \pm T^n\longmapsto n
> $$
> has kernel $\{\pm I\}$, which is contained in $H$. Its image on $H$ is therefore a subgroup $h\mathbb Z$ of $\mathbb Z$ containing $N\mathbb Z$. Here $h$ is a positive divisor of $N$. It follows that
> $$
> H=\{\pm T^{hk}:k\in\mathbb Z\},\qquad
> h_s=[G_\infty:H]=[\mathbb Z:h\mathbb Z]=h\leq N.
> $$
> In particular, the width is finite and positive.
>
> **(b).** Since $\delta(s)=\infty$, conjugation by $\delta$ gives
> $$
> \delta G_s\delta^{-1}=G_\infty.
> $$
> Also, because $\pm I$ act trivially on every cusp,
> $$
> \begin{aligned}
> \delta(\{\pm I\}\Gamma_s)\delta^{-1}
> &=\{\pm I\}(\delta\Gamma\delta^{-1})_\infty\\
> &=(\delta\{\pm I\}\Gamma\delta^{-1})_\infty=H.
> \end{aligned}
> $$
> The second equality follows in both directions: if $\pm\delta\eta\delta^{-1}$ fixes $\infty$, then $\eta$ fixes $s$, and conversely. Conjugation therefore bijects the coset sets and gives
> $$
> h_s=[G_s:\{\pm I\}\Gamma_s]
> =|G_s/\{\pm I\}\Gamma_s|.
> $$
> This expression is independent of the chosen $\delta$.
>
> **(c).** Put $s'=\gamma(s)$ and $\Gamma'=\gamma\Gamma\gamma^{-1}$. Since $\gamma\in G$, conjugation by $\gamma$ maps $G$ to itself and gives
> $$
> \gamma G_s\gamma^{-1}=G_{s'},\qquad
> \gamma(\{\pm I\}\Gamma_s)\gamma^{-1}
> =\{\pm I\}\Gamma'_{s'}.
> $$
> Apply part (b) to both pairs. The corresponding indices are equal, proving $h_{s',\Gamma'}=h_{s,\Gamma}$.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete exercise and width definition were checked on rendered original pages [S7, Exercise 2.4.4, printed p. 62 / PDF p. 77; definition and discussion, printed pp. 59–60 / PDF pp. 74–75]. The hints above and solution are independent derivations; the printed pointer to Appendix A is retained in the statement.
- **Sign convention:** The subgroup $\{\pm I\}\Gamma_s$ is used even when $-I\notin\Gamma$. Width measures the effective translations, so omitting this factor can give an incorrect index.
- **Check:** For $\Gamma=\Gamma(N)$, a matrix $\pm T^n$ belongs to $\{\pm I\}\Gamma(N)$ exactly when $N\mid n$, so the width at $\infty$ is $N$. Part (c) and normality make every cusp width $N$.
- **Routing:** Stabilizer conjugation and subgroup indices are the main tools, so the note belongs to Group Theory.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
