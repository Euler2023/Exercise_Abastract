---
title: "Exercise AG138: Functorial Reduction of Positive Genus Curves"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.9, printed p. 351, PDF p. 364"
source_refs:
  - "S7/ch-8/sec-5/ex-9"
created: 2026-10-28
---

# Exercise AG138: Functorial Reduction of Positive Genus Curves

## Problem Statement

> [!question] Original Exercise 8.5.9
> Prove Corollary 8.5.8.

> **Context and notation.** Corollary 8.5.8 (printed p. 348 / PDF p. 361) assumes $C'$ has positive genus: (a) a surjective $h:C\to C'$ has surjective reduction; (b) if $k:C'\to C''$ and $C''$ has positive genus, then $\widetilde{k\circ h}=\widetilde k\circ\widetilde h$; (c) an isomorphism $h$ has isomorphic reduction. Theorem 8.5.7 supplies pointwise compatibility and equality of degrees for positive-genus targets; its proof is quoted in the source, not assigned here.

## Hints

> [!hint]- Hint 1
> Use preservation of degree for (a), and commutation with point reduction for (b).

> [!hint]- Hint 2
> For (c), reduce the inverse and use (b) on both composites.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> All curves below are nonsingular projective curves over $\overline{\mathbb Q}$ with good reduction at the chosen prime. The imported Theorem 8.5.7 says that, when the target has positive genus, a morphism commutes with reduction on every geometric point and preserves degree. The geometric reduction map on points is surjective.
>
> (a) If $h:C\to C'$ is surjective, it is nonconstant and has positive degree. The degree equality gives $\deg\widetilde h=\deg h>0$, so $\widetilde h$ is nonconstant. A nonconstant morphism of projective integral curves is surjective: its image is closed, and if it were proper it would be finite, contradicting nonconstancy. Hence $\widetilde h$ surjects.
>
> (b) Let $k:C'\to C''$ have positive-genus target, and let $C'$ also have positive genus. For any $P\in C$,
> $$
> (\widetilde k\circ\widetilde h)(\widetilde P)=\widetilde k(\widetilde{h(P)})=\widetilde{k(h(P))}
> =\widetilde{k\circ h}(\widetilde P).
> $$
> The three uses of Theorem 8.5.7 are valid for $h,k,k\circ h$ because their respective targets have positive genus. Every geometric point of $\widetilde C$ lifts to some $P$, so the two morphisms agree on all geometric points and are equal.
>
> (c) If $h$ is an isomorphism, $C$ and $C'$ have the same positive genus. Apply (b) to $h,h^{-1}$ in both orders. Reduction of the identity is the identity, since it fixes every reduced point. Thus $\widetilde{h^{-1}}\widetilde h=1$ and $\widetilde h\widetilde{h^{-1}}=1$. This proves that $\widetilde h$ is an isomorphism. In particular the reduced isomorphism class in positive genus is independent of a good model up to the isomorphisms covered by the theorem.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 351 / PDF p. 364. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
