---
title: "Exercise LA353: Split Exact Sequences and Finite Direct Sums"
topic: module-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - module-theory
  - exact-sequences
  - direct-sums
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 4, printed pp. 165–166, PDF pp. 180–181"
created: 2026-08-29
---

# Exercise LA353: Split Exact Sequences and Finite Direct Sums

## Problem Statement

> [!question] Lang, Chapter III, Exercise 4 — Direct sums
> **(a)** Prove in detail that the conditions given in Proposition 3.2 for a sequence to split are equivalent. Show that an exact sequence
>
> $$
> 0\longrightarrow M'\xrightarrow{f}M\xrightarrow{g}M''\longrightarrow0
> $$
>
> splits if and only if there is a submodule $N\subseteq M$ such that $M=\operatorname{Im}f\oplus N$, and that then $N\cong M''$. Complete all details of the proof of Proposition 3.2.
>
> **(b)** Let $E$ and $E_i$ $(i=1,\ldots,m)$ be modules over a ring. Let $\varphi_i:E_i\to E$ and $\psi_i:E\to E_i$ be homomorphisms satisfying
>
> $$
> \psi_i\circ\varphi_i=\operatorname{id},
> \qquad
> \psi_i\circ\varphi_j=0\quad(i\ne j),
> \qquad
> \sum_{i=1}^m\varphi_i\circ\psi_i=\operatorname{id}.
> $$
>
> Show that
>
> $$
> x\longmapsto(\psi_1x,\ldots,\psi_mx)
> $$
>
> is an isomorphism from $E$ onto the direct product of the $E_i$, with inverse
>
> $$
> (x_1,\ldots,x_m)\longmapsto\varphi_1x_1+\cdots+\varphi_mx_m.
> $$
>
> Conversely, verify these identities when $E$ is a finite direct product (or direct sum) of the submodules $E_i$, with $\varphi_i$ the inclusions and $\psi_i$ the projections.

## Hints

> [!hint]- Hint 1
> A right splitting $\varphi:M''\to M$ gives the projection $\varphi g$ onto a complement of $\ker g=\operatorname{Im}f$.

> [!hint]- Hint 2
> To pass from a left splitting $\psi f=\operatorname{id}_{M'}$ to a right splitting, lift $z\in M''$ to $m\in M$ and remove the component $f\psi(m)$.

## Solution

> [!success]- Independently derived solution
> **(a) From a right splitting to a left splitting.** Suppose $\varphi:M''\to M$ satisfies $g\varphi=\operatorname{id}_{M''}$. For $m\in M$,
>
> $$
> g\bigl(m-\varphi g(m)\bigr)=0,
> $$
>
> so exactness gives a unique $\psi(m)\in M'$ such that
>
> $$
> f\psi(m)=m-\varphi g(m).
> $$
>
> Uniqueness and linearity of the right-hand side show that $\psi$ is a homomorphism. Since $gf=0$,
>
> $$
> f\psi f=f-\varphi gf=f.
> $$
>
> The injectivity of $f$ yields $\psi f=\operatorname{id}_{M'}$.
>
> **From a left splitting to a right splitting.** Conversely, suppose $\psi:M\to M'$ satisfies $\psi f=\operatorname{id}_{M'}$. For $z\in M''$, choose $m\in M$ with $g(m)=z$ and define
>
> $$
> \varphi(z)=m-f\psi(m).
> $$
>
> If $m'$ is another lift, then $m'-m=f(a)$ for some $a\in M'$, and
>
> $$
> (m'-f\psi(m'))-(m-f\psi(m))
> =f(a)-f\psi f(a)=0.
> $$
>
> Thus $\varphi$ is well-defined and linear, and $g\varphi(z)=g(m)=z$. Hence the two splitting conditions are equivalent.
>
> If $g\varphi=\operatorname{id}$, then every $m\in M$ has the decomposition
>
> $$
> m=\bigl(m-\varphi g(m)\bigr)+\varphi g(m)
> \in\ker g+\operatorname{Im}\varphi.
> $$
>
> The intersection is zero: if $\varphi(z)\in\ker g$, then $z=g\varphi(z)=0$. Since $\ker g=\operatorname{Im}f$,
>
> $$
> M=\operatorname{Im}f\oplus\operatorname{Im}\varphi,
> $$
>
> and $g$ restricts to an isomorphism $\operatorname{Im}\varphi\cong M''$ with inverse $\varphi$. Likewise, if $\psi f=\operatorname{id}_{M'}$, then
>
> $$
> M=\operatorname{Im}f\oplus\ker\psi.
> $$
>
> Indeed, $m=f\psi(m)+(m-f\psi(m))$, the second summand lies in $\ker\psi$, and $f(a)\in\ker\psi$ forces $a=\psi f(a)=0$.
>
> Conversely, if $M=\operatorname{Im}f\oplus N$, then $g|_N:N\to M''$ is injective because $N\cap\ker g=0$, and it is surjective because every lift of an element of $M''$ can be decomposed into an $\operatorname{Im}f$-part and an $N$-part. Its inverse is a right splitting. These decompositions also give the Proposition 3.2 isomorphism
>
> $$
> M\cong M'\oplus M''.
> $$
>
> **(b)** Define
>
> $$
> \Psi:E\longrightarrow\prod_{i=1}^mE_i,
> \qquad
> \Psi(x)=(\psi_1x,\ldots,\psi_mx),
> $$
>
> and
>
> $$
> \Phi:\prod_{i=1}^mE_i\longrightarrow E,
> \qquad
> \Phi(x_1,\ldots,x_m)=\sum_{i=1}^m\varphi_i x_i.
> $$
>
> For the $k$-th coordinate,
>
> $$
> (\Psi\Phi(x_1,\ldots,x_m))_k
> =\sum_{i=1}^m\psi_k\varphi_i(x_i)=x_k,
> $$
>
> while $\Phi\Psi=\sum_i\varphi_i\psi_i=\operatorname{id}_E$. Hence $\Phi$ and $\Psi$ are inverse isomorphisms. For a finite direct product or direct sum, the coordinate inclusions and projections satisfy exactly the displayed relations, proving the converse.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]

## Notes

- **Finite-index convention:** In part (b), finite direct products and finite direct sums coincide; the two terms emphasize their different universal descriptions.
- **Source status:** [S2, Ch. III, Ex. 4, printed pp. 165–166, PDF pp. 180–181]. All omitted implications from Proposition 3.2 are supplied independently above.
- **Figure status:** No source figure is required.
