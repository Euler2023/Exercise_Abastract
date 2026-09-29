---
title: "Exercise R301: The Jacobson Radical and Simple Modules"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - jacobson-radical
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 1, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise R301: The Jacobson Radical and Simple Modules

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 1
> (a) Let $R$ be a ring. We define the **radical** of $R$ to be the left ideal $N$ which is the intersection of all maximal left ideals of $R$. Show that $NE=0$ for every simple $R$-module $E$. Show that $N$ is a two-sided ideal.
>
> (b) Show that the radical of $R/N$ is $0$.

> [!info] Conventions
> Rings have an identity, and modules are unital left modules. The radical in this exercise is the Jacobson radical $J(R)$, not the set of nilpotent elements. A maximal left ideal is a maximal proper left ideal.

## Hints

> [!hint]- Hint 1: Use every cyclic presentation of a simple module
> For each nonzero $x$ in a simple module $E$, the map $R\to E$, $r\mapsto rx$, is surjective and has a maximal left ideal as its kernel.

> [!hint]- Hint 2: Recover the intersection from annihilation
> An element annihilating every simple left module lies in every maximal left ideal: test it on $R/L$ and on $1+L$. Then use the annihilator description to prove closure under right multiplication, and use ideal correspondence for $R/N$.

## Solution

> [!success]- Independent derivation from cyclic simple modules
> The intersection $N$ is a left ideal because intersections preserve addition, additive inverses, and multiplication on the left. If $R=0$, there are no simple unital $R$-modules, and the empty intersection of maximal left ideals is $R=0$; all assertions follow. We may therefore take $R\ne0$.
>
> **(a), annihilation of simple modules.** Let $E$ be simple and $x\in E$ nonzero. The cyclic submodule $Rx$ is nonzero, hence equals $E$. Thus
>
> $$
> \phi_x:R\longrightarrow E,\qquad r\longmapsto rx
> $$
>
> is a surjective homomorphism of left modules. Its kernel $L_x$ is a maximal left ideal: submodules of $R/L_x\simeq E$ correspond to left ideals containing $L_x$, and $E$ has no nonzero proper submodule. By definition $N\subseteq L_x$, so $Nx=0$. This also holds for $x=0$, and therefore $NE=0$.
>
> Conversely, if $a\in R$ annihilates every simple left module, let $L$ be any maximal left ideal. The quotient $R/L$ is simple, so
>
> $$
> a(1+L)=a+L=0.
> $$
>
> Hence $a\in L$, for every such $L$, and $a\in N$. We have proved the useful characterization
>
> $$
> N=\{a\in R:aE=0\text{ for every simple left }R\text{-module }E\}.
> $$
>
> **(a), the right-ideal property.** If $n\in N$ and $r\in R$, then for every simple module $E$ and $x\in E$,
>
> $$
> (nr)x=n(rx)=0.
> $$
>
> The characterization just proved implies $nr\in N$. Since $N$ is already a left ideal, it is two-sided.
>
> **(b).** Let $\pi:R\to R/N$ be the quotient map. Left ideals of $R/N$ correspond under inverse image to left ideals of $R$ containing $N$, and this correspondence preserves properness and strict inclusion. Consequently their maximal proper members correspond. Every maximal left ideal $L$ of $R$ already contains $N$, so all of them occur. Therefore
>
> $$
> \pi^{-1}(J(R/N))=\bigcap_{L\text{ maximal left}}L=N.
> $$
>
> Since $\ker\pi=N$, this implies $J(R/N)=0$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]

## Notes

- **Source and proof status:** Both parts and the definition of the radical were checked at [S2, Ch. XVII, Ex. 1, printed p. 661, PDF p. 676]. The proof is independently supplied from simple modules and the correspondence of submodules under a quotient.
- **Boundary:** A quotient by a maximal left ideal is used as a left module, not as a quotient ring: that left ideal need not be two-sided. Only after proving that $N$ is two-sided do we form the ring $R/N$.
