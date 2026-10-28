---
title: "Exercise F143: Degrees of Morphisms and Constant Extension"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.3, Exercise 7.3.1, printed p. 278, PDF p. 291"
source_refs:
  - "S7/ch-7/sec-3/ex-1"
created: 2026-10-28
---

# Exercise F143: Degrees of Morphisms and Constant Extension

## Problem Statement

> [!question] Original Exercise 7.3.1
> (a) Show that the degree of a composition of morphisms over $k$ is the product of the degrees, and so such a morphism is an isomorphism if and only if its degree is $1$.
>
> (b) Let $h:C\longrightarrow C'$ be a nonconstant morphism defined over $k$. Show that
> $$
> [\bar k(C):h^*(\bar k(C'))]=[k(C):h^*(k(C'))].
> $$

> **Context and notation.** Printed p. 273 / PDF p. 286 defines $\deg h=[k(C):h^*k(C')]$ for nonconstant morphisms; constant maps have degree $0$. The curves throughout this assertion are nonsingular and projective.

## Hints

> [!hint]- Hint 1
> Reverse composition under pullback and apply the tower law.

> [!hint]- Hint 2
> Use geometric integrality to extend constants without introducing zero divisors, then extend a vector-space basis.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Work with the nonsingular projective geometrically integral curves of the section.
>
> **(a)** For nonconstant $h:C\to C'$ and $g:C'\to C''$, the pullback reverses composition:
> $$
> (g\circ h)^*=h^*\circ g^*.
> $$
> The inclusions of function fields form a tower. The degree formula and the tower law give
> $$
> \deg(g\circ h)
> =[k(C):h^*k(C')]\,[h^*k(C'):h^*g^*k(C'')]
> =\deg h\,\deg g.
> $$
> The second factor equals $\deg g$ because $h^*$ is an isomorphism onto its image. If either morphism is constant, its degree is defined to be zero, and the composite is constant, giving the same formula.
>
> An isomorphism and its inverse have product of degrees $1$, so both have degree $1$. Conversely $\deg h=1$ means $h^*:k(C')\to k(C)$ is an isomorphism. Its inverse field map corresponds, by the source's **Curves–Fields Correspondence, Theorem 7.2.6**, to an inverse morphism. This use of nonsingularity and projectivity is essential; a normalization of a singular curve can have degree one without being an isomorphism.
>
> **(b)** Put $L=k(C)$, $F=h^*k(C')$, and $d=[L:F]$. Geometric integrality means that $L\otimes_k\bar k$ and $F\otimes_k\bar k$ are domains. These tensor products are fields: each is the union of its finite-dimensional domains obtained by adjoining a finite algebraic constant extension, and a finite-dimensional domain over a field is a field. They identify with $\bar k(C)$ and $h^*\bar k(C')$.
>
> Base extension gives
> $$
> L\otimes_F(F\otimes_k\bar k)\simeq L\otimes_k\bar k.
> $$
> Tensoring an $F$-basis of $L$ with the larger field leaves a basis of size $d$. Hence the dimension on the left over $F\otimes_k\bar k$ is $d$, proving the desired equality. This argument proves the constant-extension degree claim rather than assuming that irreducibility automatically survives every extension.

## Related Concepts

- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 278 / PDF p. 291. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
