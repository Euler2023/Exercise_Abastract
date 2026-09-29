---
title: "Exercise LA423: Dual Restriction Preserves Inclusion Invariants"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - linear-algebra
  - duality
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 7, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA423: Dual Restriction Preserves Inclusion Invariants

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 7
> Let $R$ be a principal entire ring. Let $E$ be a free module over $R$, and let $E^\vee=\operatorname{Hom}_R(E,R)$ be its dual module. Then $E^\vee$ is free of dimension $n$. Let $F$ be a submodule of $E$. Show that $E^\vee/F^\perp$ can be viewed as a submodule of $F^\vee$, and that its invariants are the same as the invariants of $F$ in $E$.

> [!warning] Source clarification: finite rank and inclusion invariants
> The printed statement introduces $n$ without first stating the rank of $E$. We use the intended finite-rank hypothesis $E\cong R^n$, with $n<\infty$. “Principal entire ring” means a principal ideal domain. Here $F^\perp=\{\varphi\in E^\vee:\varphi(F)=0\}$, and “invariants” means the nonzero Smith invariants of the **inclusions**, up to multiplication by units, not invariants of the abstract free modules alone.

## Hints

> [!hint]- Hint 1: Restrict functionals
> Consider the map $\rho:E^\vee\to F^\vee$ given by $\rho(\varphi)=\varphi|_F$. Identify its kernel.

> [!hint]- Hint 2: Use bases adapted to the inclusion
> If $F$ has basis $f_i=d_ie_i$ for $1\leq i\leq r$, where $e_1,\ldots,e_n$ is a basis of $E$, compute $\rho(e_i^\vee)$ in the dual basis of $F^\vee$.

## Solution

> [!success]- Solution
> The restriction map $\rho:E^\vee\to F^\vee$ is $R$-linear and has kernel $F^\perp$. Thus it induces a canonical injection
>
> $$
> \overline\rho:E^\vee/F^\perp\hookrightarrow F^\vee,
> \qquad [\varphi]\longmapsto\varphi|_F,
> $$
>
> whose image is $\rho(E^\vee)$.
>
> We use the submodule basis theorem over a PID (the Smith normal form theorem): for $F\subseteq E\cong R^n$, there are a basis $e_1,\ldots,e_n$ of $E$, an integer $0\leq r\leq n$, and nonzero $d_1,\ldots,d_r\in R$ with $d_1\mid\cdots\mid d_r$, such that $f_i=d_ie_i$ form a basis of $F$. The $d_i$, up to units, are the inclusion invariants of $F$ in $E$.
>
> Let $e_i^\vee$ and $f_i^\vee$ denote the respective dual bases. These are bases because the modules have finite rank: a functional is the sum of its values on the basis vectors times the corresponding dual vectors. For $1\leq j\leq r$,
>
> $$
> e_i^\vee(f_j)=e_i^\vee(d_je_j)=d_j\delta_{ij}.
> $$
>
> Consequently
>
> $$
> \rho(e_i^\vee)=
> \begin{cases}
> d_if_i^\vee,&1\leq i\leq r,\\
> 0,&r<i\leq n,
> \end{cases}
> \qquad
> \rho(E^\vee)=\bigoplus_{i=1}^r Rd_if_i^\vee.
> $$
>
> Since $R$ is a domain and each $d_i\ne0$, a functional $\sum_i a_ie_i^\vee$ vanishes on $F$ exactly when $a_i=0$ for $i\leq r$. Hence $F^\perp=\bigoplus_{i=r+1}^n Re_i^\vee$, and the quotient has basis $[e_1^\vee],\ldots,[e_r^\vee]$. In this basis and the basis $f_1^\vee,\ldots,f_r^\vee$ of $F^\vee$, the injection $\overline\rho$ has matrix $\operatorname{diag}(d_1,\ldots,d_r)$. Its inclusion invariants are exactly the original $d_1,\ldots,d_r$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 7, printed p. 568, PDF p. 583]. The original wording, quotient, and dual notation were checked on the page image. Restriction and the dual-basis computation are independent derivations. The submodule basis theorem over a PID is a named external structural input, stated explicitly above and not reproved here.
- **Boundary:** Restriction need not be surjective: for $R=\mathbb Z$, $E=\mathbb Z$, and $F=2\mathbb Z$, its image in $F^\vee\cong\mathbb Z$ is $2\mathbb Z$. Also $E/F$ has free rank $n-r$, whereas $F^\vee/\rho(E^\vee)$ is torsion; equality of the nonzero inclusion invariants does not assert equality of these quotient modules.
- **Routing:** The work is a dual-basis and Smith-invariant calculation, so this module-theoretic exercise belongs in the existing Linear Algebra and Modules folder.
