---
title: 'Exercise LA567: Shapiros Lemma for First Cohomology'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 5, printed p. 315, PDF p. 334
source_refs:
- S4/ch-IV/sec-7/ex-5
created: '2026-10-23'
---

# Exercise LA567: Shapiros Lemma for First Cohomology

## Problem Statement

> [!question] Neukirch IV.7.5
> If $G$ is a group, $\mathfrak g$ a normal subgroup and $A$ a $\mathfrak g$-module, then $H^1(G,\operatorname{Ind}_G^{\mathfrak g}(A))\simeq H^1(\mathfrak g,A)$.

## Hints

> [!hint]- Hint 1
> In this section, Ind consists of all functions satisfying $f(xh)=f(x)^h$, with no finite-support condition; it is coinduction. Evaluation $f\mapsto f(1)$ induces the Shapiro map.

> [!hint]- Hint 2
> Choose representatives $r(x)$ of $G/\mathfrak g$ and write $x=r(x)h(x)$. For a cocycle $c:\mathfrak g\to A$, set $t(\sigma,x)=r(\sigma x)^{-1}\sigma r(x)$.

> [!hint]- Hint 3
> The inverse construction is $z_c(\sigma)(x)=c(t(\sigma,x))^{h(x)}$. To show that the two constructions are inverse on cohomology, track coboundaries as well.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Following the definition in this section of the book, write $I=\operatorname{Ind}_G^{\mathfrak g}(A)$. Its elements are all functions $f:G\to A$ satisfying $f(xh)=f(x)^h$, with right action $f^\sigma(x)=f(\sigma x)$. Use multiplicative notation for the abelian modules and the right-cocycle convention.
>
> **1. Evaluation.** For $z\in Z^1(G,I)$, define $c(h)=z(h)(1)$. Since
> $$
> c(hk)=z(h)(k)z(k)(1)=c(h)^k c(k),
> $$
> this is a $\mathfrak g$-cocycle. If $z(\sigma)=b^{\sigma-1}$, then $c(h)=b(h)/b(1)=b(1)^{h-1}$, so evaluation induces $H^1(G,I)\to H^1(\mathfrak g,A)$.
>
> **2. Inverse construction of cocycles.** Choose a representative $r$ for every left coset, including $1$, and write $x=r(x)h(x)$. Set
> $$
> t(\sigma,x)=r(\sigma x)^{-1}\sigma r(x)\in\mathfrak g,\qquad
> z_c(\sigma)(x)=c(t(\sigma,x))^{h(x)}.
> $$
> Since $r(xh)=r(x)$ and $h(xh)=h(x)h$, the function $z_c(\sigma)$ satisfies the induced-function relation. Also,
> $$
> t(\sigma\tau,x)=t(\sigma,\tau x)t(\tau,x),\qquad
> h(\tau x)=t(\tau,x)h(x).
> $$
> Substituting the cocycle identity for $c$ gives $z_c(\sigma\tau)(x)=z_c(\sigma)(\tau x)z_c(\tau)(x)$, so $z_c$ is a $G$-cocycle. For $h\in\mathfrak g$ and $x=1$, we have $t(h,1)=h$, so evaluation recovers $c$.
>
> If $c(h)=a^{h-1}$, take the induced function $b(x)=a^{h(x)}$. Then
> $$
> z_c(\sigma)(x)=a^{h(\sigma x)}/a^{h(x)}=b^{\sigma-1}(x).
> $$
> Thus the inverse construction is well-defined on cohomology.
>
> **3. Evaluation has zero kernel.** For a general $z$, define $b(r)=z(r)(1)$ and extend by the induced relation $b(rh)=b(r)^h$. Normalize by $z'=z/b^{\sigma-1}$. Then $z'(r)(1)=1$, and the cocycle obtained by evaluation on $\mathfrak g$ is unchanged. Write $x=r(x)h(x)$; the cocycle identity gives $z'(x)(1)=c(h(x))$. Therefore
> $$
> z'(\sigma)(x)=\frac{z'(\sigma x)(1)}{z'(x)(1)}
> =\frac{c(h(\sigma x))}{c(h(x))}=c(t(\sigma,x))^{h(x)}=z_c(\sigma)(x).
> $$
> Every class therefore equals the class obtained by evaluation followed by the inverse construction, so the maps are inverse. The resulting isomorphism is independent of representatives, since evaluation itself involves no choices.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology and Shapiro Lemma]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Group Modules]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 5, printed p. 315, PDF p. 334]. Independent proof with explicit cocycles and coboundaries. Ind is defined on printed pp. 312–313 / PDF pp. 331–332 of this section as coinduction using all functions. It must not be replaced by finite-support induction when the index is infinite.
- **Boundary:** The proof does not actually require $\mathfrak g$ to be normal; the stronger normality assumption in the problem is certainly sufficient. These are abstract groups. A version for continuous profinite cohomology must also specify the topological hypotheses for continuous coinduction.
