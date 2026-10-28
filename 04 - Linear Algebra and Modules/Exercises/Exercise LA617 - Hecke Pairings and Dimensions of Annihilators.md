---
title: "Exercise LA617: Hecke Pairings and Dimensions of Annihilators"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.6, Exercise 6.6.2, printed p. 251, PDF p. 265"
source_refs:
  - "S7/ch-6/sec-6/ex-2"
created: 2026-10-28
---

# Exercise LA617: Hecke Pairings and Dimensions of Annihilators

## Problem Statement

> [!question] Original Exercise 6.6.2
> (a) In the proof of Proposition 6.6.4, prove that the pairing $\mathbb T_{\mathbb C}\times S_2\longrightarrow\mathbb C$ is nondegenerate in the second component.
>
> (b) Justify the equalities in (6.16), (6.17), and (6.18).

## Hints

> [!hint]- Hint 1
> Use $a_1(T_ng)=a_n(g)$ for every $n$.

> [!hint]- Hint 2
> For a finite-dimensional module $V$, dualizing identifies $(V[J])^\vee$ with $V^\vee/JV^\vee$. Keep track of whether dimensions are complex or real.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** If $g$ pairs to zero with every Hecke operator, then $a_n(g)=a_1(T_ng)=0$ for every $n\ge1$. Its convergent Fourier series vanishes, so $g=0$. Nondegeneracy in the first component follows as well: if $a_1(Tg)=0$ for all $g$, then $a_n(Tg)=a_1(TT_ng)=0$ for all $n,g$, so $T=0$. Finite dimensionality therefore makes the pairing perfect and gives the Hecke-equivariant isomorphism $S_2\cong\mathbb T_{\mathbb C}^{\vee}$.
>
> **(6.16), over $\mathbb C$.** A finite-dimensional space and its dual have the same dimension. For a commuting algebra acting on $V$, the annihilator in $V$ of $JV^\vee$ is $V[J]$: pairing with $j\varphi$ gives $\varphi(jv)$. Taking annihilators twice shows $(V[J])^\vee\cong V^\vee/JV^\vee$. Apply this to $V=S_2$ and $J=I_f$, and use the dual of the perfect pairing $S_2^\vee\cong\mathbb T_{\mathbb C}$, to obtain every equality in
> $$
> \dim S_2[I_f]=\dim(S_2[I_f])^\vee
> =\dim(S_2^\vee/I_fS_2^\vee)
> =\dim(\mathbb T_{\mathbb C}/I_f\mathbb T_{\mathbb C}).
> $$
> **(6.17), over $\mathbb C$.** The source establishes a surjection $\mathbb T_{\mathbb Z}\otimes\mathbb C\twoheadrightarrow\mathbb T_{\mathbb C}$ which carries $I_f\otimes\mathbb C$ into $I_f\mathbb T_{\mathbb C}$. Therefore
> $$
> \dim S_2[I_f]\le\dim\big((\mathbb T_{\mathbb Z}\otimes\mathbb C)/(I_f\otimes\mathbb C)\big)
> =\dim((\mathbb T_{\mathbb Z}/I_f)\otimes\mathbb C)
> =\operatorname{rank}(\mathbb T_{\mathbb Z}/I_f)=[K_f:\mathbb Q]=\dim V_f.
> $$
> The first equality is Lemma 6.6.2(b), the second is (a), and the next uses the eigenvalue-ring isomorphism $\mathbb T_{\mathbb Z}/I_f\cong\mathbb Z[a_n(f)]$, an order of full rank in $K_f$. The last holds because the distinct normalized conjugate eigenforms are linearly independent: commuting Hecke operators separate their eigencharacters. These are the Section 6.5 inputs. Since $V_f\subseteq S_2[I_f]$, the inequality also proves equality of those subspaces.
>
> **(6.18), over $\mathbb R$.** View complex spaces as real spaces throughout this line, so their real dimensions are twice their complex dimensions. The equality $V_f=S_2[I_f]$ and the same annihilator argument give
> $$
> \dim_{\mathbb R}V_f^\vee
> =\dim_{\mathbb R}(S_2[I_f])^\vee
> =\dim_{\mathbb R}(S_2^\vee/I_fS_2^\vee).
> $$
> The period theorem identifies $H_1\otimes\mathbb R$ with $S_2^\vee$ as real Hecke modules. Lemma 6.6.2(c), then (b), then (a) give in order
> $$
> \begin{aligned}
> \dim_{\mathbb R}(S_2^\vee/I_fS_2^\vee)
> &=\dim_{\mathbb R}\big((H_1\otimes\mathbb R)/I_f(H_1\otimes\mathbb R)\big)\\
> &=\dim_{\mathbb R}\big((H_1\otimes\mathbb R)/(I_fH_1\otimes\mathbb R)\big)\\
> &=\dim_{\mathbb R}((H_1/I_fH_1)\otimes\mathbb R)
> =\operatorname{rank}(H_1/I_fH_1).
> \end{aligned}
> $$
> This explains every equality without confusing scalar extension with taking the complex span of an integral lattice.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced formulas:** (6.16)–(6.18), printed p. 247, PDF p. 261, checked directly. Their complete equality chains are reproduced in the solution.
- **Imported inputs:** Section 6.5 eigenvalue integrality and conjugate-eigenform independence, and the period theorem for compact Riemann surfaces. These are not reproved here.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
