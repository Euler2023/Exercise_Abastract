---
title: "Exercise AG110: A Quartic Twist and Rational Two Torsion"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.9, printed p. 271, PDF p. 284"
source_refs:
  - "S7/ch-7/sec-2/ex-9"
created: 2026-10-28
---

# Exercise AG110: A Quartic Twist and Rational Two Torsion

## Problem Statement

> [!question] Original Exercise 7.2.9
> Consider the curves $E:y^2=4x^3-4x$ and $E':y^2=4x^3+4x$. Show that they are isomorphic as curves over $\overline{\mathbb Q}$ by finding an admissible change of variable there. Show that they are not isomorphic as curves over $\mathbb Q$, either by excluding an appropriate admissible change or by comparing $E[2](\mathbb Q)$ and $E'[2](\mathbb Q)$.

## Hints

> [!hint]- Hint 1
> Use the scaling rule $u^4g'_2=g_2$.

> [!hint]- Hint 2
> Two-torsion points have $y=0$. Translate any proposed curve isomorphism so it preserves the origin before comparing groups.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Choose $u\in\overline{\mathbb Q}$ with $u^4=-1$. Substituting $x=u^2x'$, $y=u^3y'$ into the equation of $E$ gives
> $$
> (y')^2=4(x')^3-\frac4{u^4}x'=4(x')^3+4x',
> $$
> so the curves are isomorphic over $\overline{\mathbb Q}$.
>
> The rational two-torsion is obtained by setting $y=0$:
> $$
> E[2](\mathbb Q)=\{0_E,(0,0),(1,0),(-1,0)\},
> $$
> $$
> E'[2](\mathbb Q)=\{0_{E'},(0,0)\},
> $$
> because $x^2+1=0$ has no rational solution.
>
> Suppose there were an isomorphism of the curves over $\mathbb Q$, not necessarily preserving the marked origins. Its value $T$ at $0_E$ is a rational point. Composing with translation by $-T$ gives a rational origin-preserving isomorphism. Such an isomorphism is an elliptic group isomorphism (the pointed-morphism theorem, proved by the Picard-group argument in Exercise 7.3.5), so it would biject their rational two-torsion subgroups. The different cardinalities contradict this. Equivalently, the source classification of pointed isomorphisms between these short Weierstrass equations would require $u^4=-1$ with $u\in\mathbb Q^*$, impossible since a nonzero rational fourth power is positive.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 271 / PDF p. 284. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Imported input:** The equivalence between origin-preserving elliptic isomorphisms and admissible changes is stated in Section 7.2; the alternative torsion proof uses the pointed-morphism theorem with its scope stated above.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
