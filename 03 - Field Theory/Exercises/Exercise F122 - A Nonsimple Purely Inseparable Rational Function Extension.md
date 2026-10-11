---
title: "Exercise F122: A Nonsimple Purely Inseparable Rational Function Extension"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - primitive-elements
  - purely-inseparable
  - dummit-foote
source: "David S. Dummit and Richard M. Foote, Abstract Algebra, 3rd ed., Ch. 14, §14.4, Exercise 6, printed p. 596, PDF p. 609"
created: 2026-10-02
---

# Exercise F122: A Nonsimple Purely Inseparable Rational Function Extension

## Problem Statement

> [!question] Dummit–Foote, Section 14.4, Exercise 6
> Prove that $\mathbb F_p(x,y)/\mathbb F_p(x^p,y^p)$ is not a simple extension by explicitly exhibiting an infinite number of intermediate subfields.

## Hints

> [!hint]- Hint 1: First determine the total degree
> Set $F=\mathbb F_p(x^p,y^p)$ and $E=\mathbb F_p(x,y)$. Use the monomials $x^iy^j$, $0\le i,j<p$, to show $[E:F]=p^2$.

> [!hint]- Hint 2: Choose parameters in the base field
> The constant field $\mathbb F_p$ is finite, but $F$ is infinite. For $c\in F$, consider $M_c=F(x+cy)$ and compute $(x+cy)^p$.

> [!hint]- Hint 3: Compare two intermediate fields
> If $M_c=M_d$ with $c\ne d$, subtraction recovers $y$ and then $x$. Compare the degree bound for $M_c/F$ with $[E:F]=p^2$.

## Solution

> [!success]- Complete independent derivation
> Here $x,y$ are algebraically independent variables over $\mathbb F_p$, and $p$ is prime. Write
> $$
> E=\mathbb F_p(x,y),\qquad F=\mathbb F_p(x^p,y^p).
> $$
>
> **1. Compute $[E:F]$.** The $p^2$ monomials
> $$
> x^iy^j,\qquad 0\le i,j<p,
> $$
> are linearly independent over $F$. Indeed, clearing denominators in an $F$-linear relation gives
> $$
> \sum_{0\le i,j<p}P_{ij}(x^p,y^p)x^iy^j=0,
> \qquad P_{ij}\in\mathbb F_p[U,V].
> $$
> For a fixed pair $(i,j)$, the exponent pairs in the corresponding summand have residues $(i,j)$ modulo $p$. These sets are disjoint for different pairs. Algebraic independence therefore forces every $P_{ij}$ to be zero.
>
> Let $W$ be their $F$-linear span in $E$. Since $x^p,y^p\in F$, reducing exponents modulo $p$ shows that $W$ is closed under multiplication. It is a finite-dimensional domain containing $1$. For every nonzero $w\in W$, multiplication by $w$ is an injective $F$-linear map $W\to W$, hence surjective; thus $wv=1$ for some $v\in W$. Consequently $W$ is a field. It contains $F,x,y$, so $W=E$. Hence
> $$
> [E:F]=p^2.
> $$
>
> **2. Construct infinitely many proper intermediate fields.** For each $c\in F$, put
> $$
> z_c=x+cy,\qquad M_c=F(z_c).
> $$
> In characteristic $p$, Frobenius gives
> $$
> z_c^p=x^p+c^py^p\in F.
> $$
> Thus the minimal polynomial of $z_c$ over $F$ divides $T^p-z_c^p\in F[T]$, and
> $$
> [M_c:F]\le p<p^2=[E:F].
> $$
> In particular $M_c\ne E$. Also $z_c\notin F$: otherwise $x+cy-z_c=0$ would be a nontrivial $F$-linear relation among the distinct basis monomials $1,x,y$. Therefore
> $$
> F\subsetneq M_c\subsetneq E.
> $$
>
> If $c\ne d$ and $M_c=M_d$, both $z_c$ and $z_d$ belong to this common field. Since $c-d\in F^\times$,
> $$
> y=\frac{z_c-z_d}{c-d}\in M_c,
> \qquad x=z_c-cy\in M_c.
> $$
> This gives $M_c=E$, contradicting the degree bound. Hence the $M_c$ are pairwise distinct. The field $F$ is infinite, since $x^p$ is transcendental over $\mathbb F_p$. We have therefore explicitly exhibited infinitely many intermediate subfields. For a concrete countable family, take $c=(x^p)^n$ for $n=0,1,2,\ldots$.
>
> **3. Verify that the extension cannot be simple.** Every $\theta\in E$ is a rational function in $x,y$ with coefficients in $\mathbb F_p$. Taking its $p$th power sends it into $F$, so its minimal polynomial divides $T^p-\theta^p$. Therefore
> $$
> [F(\theta):F]\le p<p^2=[E:F]
> $$
> for every $\theta\in E$. Thus $E\ne F(\theta)$ for every choice of $\theta$: the extension is not simple and has no primitive element. It is purely inseparable, since every element has its $p$th power in $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[03 - Field Theory/Concepts/Purely Inseparable Extensions|Purely Inseparable Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

> [!info] Overlap with Exercise F83
> This is the $k=\mathbb F_p$ specialization of [[03 - Field Theory/Exercises/Exercise F83 - Infinitely Many Intermediate Purely Inseparable Fields|Exercise F83]], sourced from Lang, Chapter V, Exercise 24, printed p. 255 / PDF p. 270. Lang allows an arbitrary field $k$ of characteristic $p$ and asks separately for the degree $p^2$ and infinitely many intermediate fields. Dummit–Foote asks for nonsimplicity by explicitly exhibiting those fields. The mathematical construction overlaps, while the source labels and exact tasks differ; this note preserves the independent Dummit exercise identity.

- **Source and proof status:** The full Dummit–Foote statement was visually checked in the third edition, §14.4, Exercise 6, printed p. 596 / PDF p. 609. Lang's Exercise 24 was rechecked on printed p. 255 / PDF p. 270 to verify the overlap. The solution above is an independent derivation and repeats the needed basis argument so the note is self-contained.
- **Parameter boundary:** Using only $c\in\mathbb F_p$ gives finitely many fields. The displayed infinite family uses parameters from $F=\mathbb F_p(x^p,y^p)$.
- **Proof inputs and routing:** The proof uses algebraic independence, Frobenius, the minimal-polynomial degree formula, and injectivity implying surjectivity for an endomorphism of a finite-dimensional vector space. It does not assume that purely inseparable extensions are simple, or use Galois correspondence. Field Theory is primary.
