---
title: "Exercise LA506: Acyclicity of Coinduced Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 9, printed p. 828, PDF p. 843"
created: 2026-09-29
---

# Exercise LA506: Acyclicity of Coinduced Modules

## Problem Statement

> [!question] Lang XX.9
> Let $B\in\operatorname{Mod}(\mathbb Z)$. Let $H^q$ be the left derived functor of $A\mapsto A^G$.
>
> (a) Show that $H^q(G,M_G(B))=0$ for all $q>0$. [Hint: use a contracting homotopy
> $$
> s:C^r(G,M_G(B))\longrightarrow C^{r-1}(G,M_G(B))
> \quad\text{by}\quad
> (sf)_{x_2,\ldots,x_r}(x)=f_{x,x_2,\ldots,x_r}(1).
> $$
> Show that $f=sdf+dsf$.] Thus $M_G$ erases the cohomology functor.
>
> (b) Also show that for all subgroups $G'$ of $G$ one has $H^q(G',M_G(B))=0$ for $q>0$.

> [!warning] Source issue: derived direction
> The group-cohomology functors are the **right** derived functors of the left exact invariants functor. The printed word “left” conflicts with the definition of right derived functors on printed p. 791, PDF p. 806. We use ordinary group cohomology and prove its asserted vanishing.

## Hints

> [!hint]- Hint 1: Separate the two sorts of arguments
> A cochain assigns to $(g_1,\ldots,g_q)$ a function on $G$. Denote its evaluation at $x$ by $f(g_1,\ldots,g_q)(x)$.

> [!hint]- Hint 2: Expand the contraction once
> Put $(sf)(g_1,\ldots,g_{q-1})(x)=f(x,g_1,\ldots,g_{q-1})(1)$. All terms except $f$ cancel between $s\delta f$ and $\delta sf$. For (b), use the coset product decomposition of $M_G(B)$.

## Solution

> [!success]- Independent cochain contraction
> Write $M=M_G(B)$, with $(g\cdot u)(x)=u(xg)$. A degree-$q$ cochain is a function $f:G^q\to M$. For $q\ge1$ define
> $$
> (sf)(g_1,\ldots,g_{q-1})(x)=f(x,g_1,\ldots,g_{q-1})(1).
> $$
> This is an additive map into degree $q-1$.
>
> **(a).** Evaluate $s\delta f$ at $(g_1,\ldots,g_q)$ and then at $x$. By the inhomogeneous coboundary formula,
> $$
> \begin{aligned}
> (s\delta f)(g_1,\ldots,g_q)(x)
> ={}&f(g_1,\ldots,g_q)(x)-f(xg_1,g_2,\ldots,g_q)(1)\\
> &+\sum_{j=1}^{q-1}(-1)^{j+1}
> f(x,g_1,\ldots,g_jg_{j+1},\ldots,g_q)(1)\\
> &+(-1)^{q+1}f(x,g_1,\ldots,g_{q-1})(1).
> \end{aligned}
> $$
> The first term uses $(x\cdot f(g_1,\ldots,g_q))(1)=f(g_1,\ldots,g_q)(x)$. On the other hand,
> $$
> \begin{aligned}
> (\delta sf)(g_1,\ldots,g_q)(x)
> ={}&f(xg_1,g_2,\ldots,g_q)(1)\\
> &+\sum_{j=1}^{q-1}(-1)^j
> f(x,g_1,\ldots,g_jg_{j+1},\ldots,g_q)(1)\\
> &+(-1)^q f(x,g_1,\ldots,g_{q-1})(1).
> \end{aligned}
> $$
> Thus $s\delta+\delta s=\mathrm{id}$ in every positive degree. If $\delta f=0$, it follows that $f=\delta(sf)$, so $H^q(G,M_G(B))=0$ for $q>0$.
>
> Every $G$-module $A$ embeds into $M_G(A)$ by $a\mapsto(x\mapsto xa)$, since evaluation at $1$ is a retraction of underlying abelian groups. Hence this construction erases all positive cohomology functors.
>
> **(b).** Choose left coset representatives $x_j$ for $G/G'$. Restricting functions to the cosets gives a $G'$-module isomorphism
> $$
> M_G(B)\big|_{G'}\simeq\prod_jM_{G'}(B)
> \simeq M_{G'}\left(\prod_jB\right).
> $$
> The first map sends $f$ to $(y\mapsto f(x_jy))_j$; the second rearranges a tuple of functions as one function valued in the product. Both commute with right translation by $G'$. Applying (a) to $G'$ and the coefficient group $\prod_jB$ proves the assertion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]

## Notes

- The full statement and contracting-homotopy hint were checked at [S2, Ch. XX, Exercise 9, printed p. 828, PDF p. 843].
- Proof status: independent derivation, with the entire cancellation written out. No Shapiro lemma is assumed.
- The contraction is only asserted in positive degrees. In degree zero, invariants are the constant functions, so $H^0(G,M_G(B))\simeq B$.
- Products in (b) allow infinite index; the group need not be finite.

