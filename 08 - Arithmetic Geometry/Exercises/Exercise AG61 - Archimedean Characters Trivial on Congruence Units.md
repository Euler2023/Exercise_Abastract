---
title: 'Exercise AG61: Archimedean Characters Trivial on Congruence Units'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 3, printed p. 484, PDF p. 503
source_refs:
- S4/ch-VII/sec-6/ex-3
created: '2026-10-23'
---

# Exercise AG61: Archimedean Characters Trivial on Congruence Units

## Problem Statement

> [!question] Neukirch VII.6.3
> Which of the characters $\lambda(x)=N(x^p|x|^{-p+iq})$ of $\mathbb R^*$ are characters of $\mathbb R^*/\mathfrak o^{\mathfrak m}$?

## Hints

> [!hint]- Hint 1
> A character descends to a quotient exactly when it is trivial on its kernel. Express this condition by phases of the embeddings of a unit.

> [!hint]- Hint 2
> Choose generators of the finite-index congruence-unit subgroup. The result is a finite system of linear congruences in the logarithmic parameters $q$.

## Solution

> [!success]- Independent derivation
> Here the source's $\mathbb R$ denotes $K\otimes_{\mathbb Q}\mathbb R$, not just the scalar field: its multiplicative group is $R^*\cong(\mathbb R^*)^{r_1}\times(\mathbb C^*)^{r_2}$. The subgroup is
> $$
> \mathfrak o^{\mathfrak m}=\{\varepsilon\in\mathfrak o^*: \varepsilon\equiv1\pmod{\mathfrak m}\}.
> $$
> For a real embedding $\rho$, admissibility means $p_\rho\in\{0,1\}$. For a chosen member $\sigma$ of a complex pair, put $\ell_\sigma=p_\sigma-p_{\bar\sigma}\in\mathbb Z$; admissibility requires the two nonnegative entries to have product zero. The real logarithmic parameters satisfy $q_{\bar\sigma}=q_\sigma$.
>
> Choose a finite generating set $\eta_1,\ldots,\eta_t$ for $\mathfrak o^{\mathfrak m}$, including its torsion generators. Such a set exists because this group has finite index in the finitely generated unit group. The complete answer is the following explicit system, one congruence for each generator:
> $$
> \begin{aligned}
> &\pi\sum_{\rho\text{ real}}p_\rho\,\mathbf1_{\rho(\eta_j)<0}
> +\sum_{\sigma\text{ complex pairs}}\ell_\sigma\arg\sigma(\eta_j)\\
> &\quad+\sum_{\rho\text{ real}}q_\rho\log|\rho(\eta_j)|
> +2\sum_{\sigma\text{ complex pairs}}q_\sigma\log|\sigma(\eta_j)|
> \ \in 2\pi\mathbb Z\qquad(1\le j\le t).
> \end{aligned}
> $$
> A choice of arguments is arbitrary, since replacing an argument by $2\pi n$ changes the expression by $2\pi\ell_\sigma n$.
>
> To prove the criterion, expand the norm, which is the product over all embeddings. The real factors of $x^p|x|^{-p}$ are $\operatorname{sgn}(x_\rho)^{p_\rho}$, and the paired complex factors are $e^{i\ell_\sigma\arg x_\sigma}$. The modulus factors contribute $\exp(i\sum_\rho q_\rho\log|x_\rho|+2i\sum_\sigma q_\sigma\log|x_\sigma|)$. Thus the displayed expression is precisely the argument of $\lambda(\eta_j)$. It is a multiple of $2\pi$ exactly when $\lambda(\eta_j)=1$. Multiplicativity then proves triviality on the whole subgroup. Conversely, a descending character is trivial on every generator and satisfies all the congruences. The descended map is continuous by the defining quotient topology.
>
> This describes all possibilities, rather than demanding $q=0$: adding the same real constant to every $q_\tau$ changes $\lambda$ by $|N_{K/\mathbb Q}(x)|^{ic}$, which is trivial on units. Torsion conditions cannot be omitted. For $K=\mathbb Q$ and $\mathfrak m=(1)$, the unit $-1$ forces $p=0$, while $q$ is arbitrary; if $\mathfrak m=(3)$, the congruence-unit group is $\{1\}$ and both $p=0,1$ are allowed.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlets Unit Theorem and Logarithmic Unit Lattices]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** The question was visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 3, printed p. 484, PDF p. 503]. Admissibility was checked at [§3, printed p. 448, PDF p. 467]; Proposition (6.7) and the type convention at [printed pp. 476–478, PDF pp. 495–497]; the congruence-unit subgroup at [printed p. 471, PDF p. 490].
- **Proof inputs:** The parametrization of archimedean characters is proved in source Proposition (6.7). Finite generation of units is the imported Dirichlet unit theorem. The descent criterion and finite phase equations are independently derived; no classification of the field-specific unit generators is asserted.
