---
title: "Exercise R443: Well Defined Pullbacks of Rational Functions"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.12, printed p. 272, PDF p. 285"
source_refs:
  - "S7/ch-7/sec-2/ex-12"
created: 2026-10-28
---

# Exercise R443: Well Defined Pullbacks of Rational Functions

## Problem Statement

> [!question] Original Exercise 7.2.12
> (a) Let prime ideals $I\subset\bar k[x_1,\ldots,x_n]$ and $I'\subset\bar k[y_1,\ldots,y_r]$ define nonsingular projective algebraic curves $C,C'$. Using projective notation, let
> $$
> h=[h_0+I,\ldots,h_r+I],\qquad h_i+I\in\bar k[C],
> $$
> be a nonconstant, hence surjective morphism from $C$ to $C'$, and let
> $$
> G=[g_0+I',g_1+I'],\qquad g_i+I'\in\bar k[C'],\quad g_0+I'\ne I',
> $$
> be an element of $\bar k(C')$. Its pullback is
> $$
> h^*G=[g_0\circ(h_0,\ldots,h_r)+I,\ g_1\circ(h_0,\ldots,h_r)+I].
> $$
> Show that replacing an $h_i$ by $h_i+\varphi$ with $\varphi\in I$ does not change this definition. Show that replacing a $g_i$ by $g_i+\psi'$ with $\psi'\in I'$ also does not change it, provided
> $$
> \varphi(P)=0\text{ for every }P\in C\ \Longrightarrow\ \varphi\in I.
> $$
> The opposite implication follows from the definition of $C$; the source refers the ideal-and-zero-set facts to an algebraic geometry text.
>
> (b) Now assume only that $h$ is a nonconstant rational map. Show that well-definedness additionally requires
> $$
> \varphi(P)=0\text{ for all but finitely many }P\in C
> \ \Longrightarrow\ \varphi(P)=0\text{ for every }P\in C.
> $$
> Again the source refers to an algebraic geometry text.

## Hints

> [!hint]- Hint 1
> Polynomial substitution respects congruences in the source ideal.

> [!hint]- Hint 2
> Use the zero-set-to-ideal implication for a target equation pulled back along $h$.

> [!hint]- Hint 3
> For a rational map first prove vanishing on its dense domain, then extend it using the stated additional implication.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Use compatible affine charts or homogeneous representatives for the displayed substitutions. The source's projective pair convention is $[g_0,g_1]\leftrightarrow g_1/g_0$; its condition $g_0\notin I'$ therefore correctly excludes the zero denominator.
>
> **(a)** For any polynomial $q$, replacing one input $h_i$ by $h_i+\varphi$ changes $q(h_0,\ldots,h_r)$ by a multiple of $\varphi$. This follows term by term from $A^m-B^m=(A-B)\sum_{j=0}^{m-1}A^{m-1-j}B^j$. Thus the change lies in $I$.
>
> If $\psi'\in I'$, then $\psi'(h(P))=0$ for every $P\in C$, because $h(P)\in C'$. The assumed vanishing-to-ideal implication gives $\psi'\circ h\in I$, so changing either target representative also leaves the two pullback classes unchanged. That implication is supplied by **Hilbert's Nullstellensatz**, since over the algebraically closed field $\bar k$ the prime ideal $I$ is radical.
>
> The pulled-back denominator is nonzero. Otherwise $g_0$ would vanish on the surjective image $C'$, forcing $g_0\in I'$, a contradiction. Finally, two projective pairs representing the same rational function satisfy the cross-product relation $g_1g'_0-g'_1g_0\in I'$. Substitution gives the identical relation modulo $I$, so the result is independent of the chosen fractional representation as well.
>
> **(b)** A rational map is defined on a cofinite open subset of the curve. The same argument now shows that $\psi'\circ h$ vanishes off finitely many points rather than initially at every point. The additional implication extends this vanishing to all points, after which Nullstellensatz gives ideal membership exactly as in (a).
>
> For an integral curve this implication holds because any proper closed subset has finitely many geometric points: a nonzero regular function cannot vanish on a cofinite, hence dense, subset. Equivalently a polynomial vanishing on a dense open set has zero image in the coordinate domain. This dimension-one zero-set fact is the named geometric input referred out by the exercise. Nonconstancy makes $h$ dominant, so the pullback of a nonzero denominator remains nonzero.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 272 / PDF p. 285. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Notation:** The condition on $g_0$ is intentional: the projective notation uses $g_0$ as denominator, as verified on printed p. 267 / PDF p. 280. It must not be silently changed to a condition on $g_1$.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
