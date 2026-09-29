---
title: "Exercise LA504: Coinduced Modules of Functions on a Group"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 7, printed p. 828, PDF p. 843"
created: 2026-09-29
---

# Exercise LA504: Coinduced Modules of Functions on a Group

## Problem Statement

> [!question] Lang XX.7
> Let $G$ be a group, $B$ an abelian group and $M_G(B)=M(G,B)$ the set of mappings from $G$ into $B$. For $x\in G$ and $f\in M(G,B)$ define $([x]f)(y)=f(yx)$.
>
> (a) Show that $B\mapsto M_G(B)$ is a covariant, additive, exact functor from $\operatorname{Mod}(\mathbb Z)$ (category of abelian groups) into $\operatorname{Mod}(G)$.
>
> (b) Let $G'$ be a subgroup of $G$ and $G=\bigcup x_jG'$ a coset decomposition. For $f\in M(G,B)$ let $f_j$ be the function in $M(G',B)$ such that $f_j(y)=f(x_jy)$. Show that the map
> $$
> f\longmapsto\prod_j f_j
> $$
> is a $G'$-isomorphism from $M(G,B)$ to $\prod_j M(G',B)$.

## Hints

> [!hint]- Hint 1: All operations are pointwise
> A homomorphism $B\to C$ induces a map of function groups by postcomposition. Lift the values of a function to check preservation of surjections.

> [!hint]- Hint 2: The cosets partition the domain
> Values on $x_jG'$ are equivalent to a function on $G'$. Right translation by $G'$ stays within each such coset.

## Solution

> [!success]- Independent verification
> Give $M_G(B)$ pointwise addition. The prescribed operators satisfy
> $$
> [x]([z]f)(y)=f(yxz)=[xz]f(y),\qquad[1]f=f,
> $$
> so they define a left $G$-module.
>
> **(a).** For a homomorphism $u:B\to C$, define $M_G(u)(f)=u\circ f$. It commutes with the $G$-action and respects identities and composition. Pointwise addition gives $M_G(u+v)=M_G(u)+M_G(v)$, so the functor is additive.
>
> For an exact sequence $0\to B'\xrightarrow{i}B\xrightarrow{p}B''\to0$, injectivity and equality of image and kernel after applying $M_G$ are checked at each argument $g\in G$. If $f:G\to B''$, choose a lift in $B$ of each value $f(g)$. These lifts define a function $\widetilde f:G\to B$ with $p\widetilde f=f$, proving surjectivity. Thus the functor is exact.
>
> **(b).** Regard the source's product notation as the tuple $(f_j)_j$. The map
> $$
> M_G(B)\longrightarrow\prod_jM_{G'}(B),\qquad f\longmapsto(f_j)_j
> $$
> is additive and bijective: its inverse defines $f(x_jy)=f_j(y)$, which is unambiguous because the cosets are disjoint and each element has a unique expression with the chosen $x_j$. For $h,y\in G'$,
> $$
> ([h]f)_j(y)=f(x_jyh)=f_j(yh)=([h]f_j)(y).
> $$
> Hence the bijection is $G'$-linear.
>
> For infinite index the target is a product, not a direct sum; a function can be nonzero on infinitely many cosets.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct sums and products]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 7, printed p. 828, PDF p. 843].
- Proof status: independent derivation. Choosing arbitrary coordinate lifts uses the usual axiom of choice.
- The module is coinduced from the trivial subgroup; $B$ initially carries no $G$-action. The right-translation formula defines a left action, as the calculation shows.
- No finiteness hypothesis on $G$ or on the index of $G'$ is needed.
