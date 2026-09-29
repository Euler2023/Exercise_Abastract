---
title: "Exercise LA505: Embedding Group Modules into Coinduced Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 8, printed p. 828, PDF p. 843"
created: 2026-09-29
---

# Exercise LA505: Embedding Group Modules into Coinduced Modules

## Problem Statement

> [!question] Lang XX.8
> For each $G$-module $A\in\operatorname{Mod}(G)$, define $\varepsilon_A:A\to M(G,A)$ by the condition $\varepsilon_A(a)=$ the function $f_a$ such that $f_a(\sigma)=\sigma a$ for $\sigma\in G$. Show that $a\mapsto f_a$ is a $G$-module embedding, and that the exact sequence
> $$
> 0\longrightarrow A\xrightarrow{\varepsilon_A}M(G,A)
> \longrightarrow X_A=\operatorname{coker}\varepsilon_A\longrightarrow0
> $$
> splits over $\mathbb Z$. (In fact, the map $f\mapsto f(e)$ splits the left side arrow.)

## Hints

> [!hint]- Hint 1: Evaluate at the identity
> The value $f_a(1)$ recovers $a$.

> [!hint]- Hint 2: Compare right translation with the original action
> Check $[g]f_a=f_{ga}$. Evaluation at $1$ is an abelian-group retraction, and its kernel supplies a direct-sum complement.

## Solution

> [!success]- Independent construction of the embedding and splitting
> In $M(G,A)$ the coefficient group is the underlying abelian group of $A$, and the $G$-action is right translation: $([g]f)(x)=f(xg)$. The map $\varepsilon_A$ is additive because $x(a+b)=xa+xb$. For $g,x\in G$,
> $$
> ([g]\varepsilon_A(a))(x)=f_a(xg)=x(ga)=f_{ga}(x).
> $$
> Thus $\varepsilon_A$ is $G$-linear.
>
> Define $r:M(G,A)\to A$ by $r(f)=f(1)$. It is $\mathbb Z$-linear and
> $$
> r\varepsilon_A(a)=f_a(1)=a.
> $$
> Therefore $\varepsilon_A$ is injective. Defining $X_A$ as its cokernel gives the displayed exact sequence of $G$-modules.
>
> There is a direct-sum decomposition of abelian groups
> $$
> M(G,A)=\varepsilon_A(A)\oplus\ker r.
> $$
> Indeed, $f=\varepsilon_A(r(f))+(f-\varepsilon_A(r(f)))$, and the second term has value zero at $1$. The intersection is zero because $r\varepsilon_A=\mathrm{id}$. Restriction of the quotient map to $\ker r$ is thus an isomorphism of abelian groups onto $X_A$, whose inverse is a splitting of the right arrow. This proves splitting over $\mathbb Z$.
>
> The retraction need not be $G$-linear: $r([g]f)=f(g)$ whereas $g\,r(f)=g f(1)$, and these are not equal for arbitrary functions. Hence no equivariant splitting is asserted.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 8, printed p. 828, PDF p. 843], including the parenthetical evaluation splitting.
- Proof status: independent derivation. The notation $e$ in the source and $1$ in the solution both denote the identity of $G$.
- The embedding is natural in $A$: for a $G$-linear map $u:A\to B$, $u(f_a(x))=x\,u(a)$, so $M_G(u)\varepsilon_A=\varepsilon_Bu$.
- This embedding supplies effacement after the positive cohomology of $M_G(A)$ is shown to vanish.

