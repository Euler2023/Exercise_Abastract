---
title: "Exercise LA477: Localization and Torsion Criteria for Flatness"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - flat-modules
  - localization
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVI, Exercise 8, printed p. 638, PDF p. 653; Proposition 3.2, printed p. 613, PDF p. 628"
created: 2026-09-29
---

# Exercise LA477: Localization and Torsion Criteria for Flatness

## Problem Statement

> [!question] Lang, Chapter XVI, Exercise 8
> Prove Proposition 3.2.

> [!quote] Proposition 3.2, as printed
> (i) Let $S$ be a multiplicative subset of $R$. Then $S^{-1}R$ is flat over $R$.
>
> (ii) A module $M$ is flat over $R$ if and only if the localization $M_{\mathfrak p}$ is flat over $R_{\mathfrak p}$ for each prime ideal $\mathfrak p$ of $R$.
>
> (iii) Let $R$ be a principal ring. A module $F$ is flat if and only if $F$ is torsion free.

The proposition is in [S2, Ch. XVI, §3, printed p. 613, PDF p. 628]. The rings in this section are commutative.

> [!warning] Source issue in (iii): the integral-domain hypothesis
> The printed phrase is “principal ring.” Lang defines a principal ring as a commutative ring with $1\ne0$ whose ideals are all principal, without requiring an integral domain [S2, Ch. II, §1, printed p. 86, PDF p. 101]. His earlier structure theory instead assumes a **principal entire ring**, and defines torsion by annihilation by a nonzero scalar [S2, Ch. III, §7, printed pp. 146–147, PDF pp. 161–162]. With that torsion convention, (iii) as literally printed is false: $R=\mathbb Z/4\mathbb Z$ is a principal ring and is free, hence flat, over itself, but its nonzero element $2$ is killed by the nonzero scalar $2$.
>
> The corrected statement proved below is: **over a principal ideal domain, an arbitrary module is flat if and only if it is torsion-free.** Parts (i) and (ii) need no correction.

## Hints

> [!hint]- Hint 1: Work with fractions and test zero locally
> Use $S^{-1}R\otimes_R U\cong S^{-1}U$. A fraction $u/s$ is zero exactly when some element of $S$ annihilates $u$. If a nonzero element of a module vanished at every prime, consider a maximal ideal containing its annihilator.

> [!hint]- Hint 2: Reduce the PID case to finite free submodules
> A torsion-free module over a PID is the directed union of its finitely generated submodules, and every such submodule is free. An element of a tensor product, and a witness that this element is zero, involve only finitely many elements of the second factor. Use one sufficiently large finite submodule to test injectivity.

## Solution

> [!success]- Independent proofs of (i), (ii), and the corrected (iii)
> We use the flatness criterion that $F$ is flat if and only if $F\otimes_R-$ preserves injections. All tensor products below are over the displayed commutative base ring.
>
> **Localization facts.** For any $R$-module $U$, there is a natural isomorphism
>
> $$
> S^{-1}R\otimes_R U\longrightarrow S^{-1}U,
> \qquad (r/s)\otimes u\longmapsto ru/s,
> $$
>
> with inverse $u/s\mapsto(1/s)\otimes u$. The fraction equivalence relation and the tensor balance relation make these maps well-defined and inverse.
>
> Localization preserves injections. Indeed, if $f:U\to V$ is injective and $f(u)/s=0$, there is a $t\in S$ with $tf(u)=0$. Then $tu=0$ by injectivity, so $u/s=0$. More generally it preserves exactness: if $U\xrightarrow f V\xrightarrow g W$ is exact at $V$ and $g(v)/s=0$, then some $t\in S$ satisfies $g(tv)=0$. Write $tv=f(u)$; then $v/s=f(u)/(ts)$ is in the localized image. Images always lie in kernels, so the localized sequence is exact. Surjections remain surjective by lifting numerators.
>
> **(i)** If $f:U\to V$ is injective, the first isomorphism identifies $1\otimes f$ with $S^{-1}f$. The preceding fraction argument shows it is injective. Thus $S^{-1}R$ is flat over $R$.
>
> **(ii), forward implication.** Assume $M$ is flat over $R$, fix a prime $\mathfrak p$, and put $S=R\setminus\mathfrak p$. For any $R_{\mathfrak p}$-module $U$, there is a natural isomorphism
>
> $$
> M\otimes_R U\cong M_{\mathfrak p}\otimes_{R_{\mathfrak p}}U,
> \qquad m\otimes u\longmapsto(m/1)\otimes u.
> $$
>
> Its inverse sends $(m/s)\otimes u$ to $m\otimes s^{-1}u$. To check independence of the fraction representative, if $t(s'm-sm')=0$ with $t\in S$, move the scalars to $U$, where $t,s,s'$ act invertibly; this gives $m\otimes s^{-1}u=m'\otimes(s')^{-1}u$. The formula also respects the $R_{\mathfrak p}$-balance relation. Thus the inverse is well-defined.
>
> An injection of $R_{\mathfrak p}$-modules is also an injection of $R$-modules. Tensoring it with $M$ over $R$ preserves injectivity, and the displayed isomorphism identifies this map with tensoring by $M_{\mathfrak p}$ over $R_{\mathfrak p}$. Hence $M_{\mathfrak p}$ is flat.
>
> **(ii), reverse implication.** Suppose that every $M_{\mathfrak p}$ is flat. Let $f:U\to V$ be an injection of $R$-modules, and let
>
> $$
> K=\ker\bigl(1_M\otimes f:M\otimes_R U\longrightarrow M\otimes_R V\bigr).
> $$
>
> Localization is exact by the fraction argument above. It also commutes with tensor products through the isomorphism
>
> $$
> (M\otimes_R U)_{\mathfrak p}
> \cong M_{\mathfrak p}\otimes_{R_{\mathfrak p}}U_{\mathfrak p},
> \qquad (m\otimes u)/s\longmapsto(m/s)\otimes(u/1).
> $$
>
> The inverse sends $(m/s)\otimes(u/t)$ to $(m\otimes u)/(st)$; the fraction and balance relations verify both formulas. Therefore $K_{\mathfrak p}$ is the kernel of $1\otimes f_{\mathfrak p}$. The map $f_{\mathfrak p}$ is injective, and flatness of $M_{\mathfrak p}$ gives $K_{\mathfrak p}=0$ for every prime $\mathfrak p$.
>
> To conclude $K=0$, suppose $0\ne z\in K$. Its annihilator $I=\{r\in R:rz=0\}$ is a proper ideal. Choose a maximal ideal $\mathfrak p$ containing $I$, using the maximal-ideal existence theorem for nonzero commutative unital rings. Then $z/1\ne0$ in $K_{\mathfrak p}$: otherwise some $s\notin\mathfrak p$ would satisfy $sz=0$, contradicting $s\in I\subseteq\mathfrak p$. This contradiction proves $K=0$. Hence tensoring any injection with $M$ is injective, so $M$ is flat. If $R$ is the zero ring, every unital $R$-module is zero and the assertion holds directly.
>
> **(iii), with $R$ a principal ideal domain.** If $F$ is flat and $0\ne a\in R$, multiplication by $a$ on $R$ is injective. Tensoring with $F$ shows multiplication by $a$ on $F$ is injective, exactly as in [[04 - Linear Algebra and Modules/Exercises/Exercise LA476 - Nonzero Divisors Act Injectively on Flat Modules|Exercise LA476]]. Thus $F$ is torsion-free.
>
> Conversely, assume $F$ is torsion-free. Let $F_i$ run through its finitely generated submodules, ordered by inclusion. This family is directed because $F_i+F_j$ is finitely generated, and its union is $F$. Each $F_i$ is torsion-free, so the structure theorem for finitely generated modules over a PID makes it finite free. This is the precise structural input [S2, Ch. III, §7, Theorem 7.3, printed p. 147, PDF p. 162].
>
> We spell out the finite-witness property of tensor products needed to pass to this union. For an $R$-module $W$, every element of $W\otimes_R F$ is a finite sum $\sum_j w_j\otimes x_j$ and therefore comes from some $W\otimes_R F_i$. Moreover, if an element of $W\otimes_R F_i$ becomes zero in $W\otimes_R F$, it becomes zero already in $W\otimes_R F_k$ for some finitely generated $F_k\supseteq F_i$. Indeed, construct the tensor product as the free abelian group on the pairs $(w,x)$ modulo the additivity and scalar-balance relations. An equality to zero is a finite sum of these generating relations. Only finitely many elements $x\in F$ occur in those relations; adjoining them to generators of $F_i$ gives such an $F_k$. Every relation in the finite witness then already holds in $W\otimes_R F_k$.
>
> Now let $f:U\to V$ be injective, and let $z\in U\otimes_R F$ map to zero in $V\otimes_R F$. Choose a representative $z_i\in U\otimes_R F_i$. Its image in $V\otimes_R F_i$ becomes zero in $V\otimes_R F$. By the finite-witness property there is $F_k\supseteq F_i$ such that the image of $z_i$ is already zero in $V\otimes_R F_k$. Since $F_k$ is finite free, tensoring $f$ with $F_k$ is a finite direct sum of copies of $f$ and is injective. Thus the image of $z_i$ in $U\otimes_R F_k$ is zero, and consequently $z=0$. Tensor symmetry identifies this with the injection criterion for $F\otimes_R-$, proving that $F$ is flat.
>
> This establishes (i), (ii), and the corrected PID version of (iii) without assuming finite generation of $M$ or $F$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Flat and Faithfully Flat Modules|Flat and Faithfully Flat Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Torsion Modules|Torsion Modules]]
- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]

## Notes

- **Source and proof status:** The exercise [S2, Ch. XVI, Ex. 8, printed p. 638, PDF p. 653] and the entire referenced Proposition 3.2 [printed p. 613, PDF p. 628] were checked on original page images. The book leaves the proposition's proofs to the reader. The fraction calculations and finite-witness proof above are independent derivations.
- **Named inputs:** The argument uses the maximal-ideal existence theorem and the finitely generated module structure theorem over a PID. Localization exactness and the finite-witness tensor property are proved here, so no general theorem asserting exactness of filtered direct limits is needed.
- **Terminology boundary:** Replacing “nonzero scalar” by “non-zero-divisor” does not rescue (iii) for arbitrary principal rings. In $R=\mathbb Z/4\mathbb Z$, every non-zero-divisor is a unit, so every module has no torsion of that restricted kind. But $R/(2)$ is not flat: after tensoring the injection $(2)\hookrightarrow R$ with $R/(2)$, the source is nonzero and the induced map is zero. Indeed, $(2)\cong R/(2)$, and $R/(2)\otimes_R R/(2)\cong R/(2)$, while the image of $\overline1\otimes2$ is $2\overline1=0$.
