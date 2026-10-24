---
title: 'Exercise Gal174: Changing the p Class Field Direction and Its Normalization'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 3, printed p. 305, PDF p. 324
source_refs:
- S4/ch-IV/sec-6/ex-3
created: '2026-10-23'
---

# Exercise Gal174: Changing the p Class Field Direction and Its Normalization

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 3
> Let $p$ be a prime number and $(d:G\to\mathbb Z_p,\ v:A_k\to\mathbb Z_p)$ a $p$-class field theory in the sense of §5, exercise 2. Let $d':G\to\mathbb Z_p$ be another surjective homomorphism, and $\widetilde K'/K$ the $\mathbb Z_p$-extension defined by $d'$. Let $v':A_k\to\mathbb Z_p$ be the composite of
> $$
> A_k\xrightarrow{(\ ,\widetilde K'/K)}G(\widetilde K'/K)\xrightarrow{d'}\mathbb Z_p.
> $$
> Then $(d',v')$ is also a $p$-class field theory. The norm residue symbols associated to $(d,v)$ and $(d',v')$ coincide. (No analogous statement holds in the case of $\widehat{\mathbb Z}$-class field theories $(d:G\to\widehat{\mathbb Z},v:A_k\to\widehat{\mathbb Z})$.)

## Hints

> [!hint]- Hint 1 — first step
> Test the definition on the rescaling $d′=u d$ for a $p$-adic unit $u$; ask whether the new value image still contains the integer $1$.

> [!hint]- Hint 2 — proof route
> First check whether the value subgroup contains the book's fixed copy of $\mathbb Z$. The substantive independence statement concerns the reciprocity map after compatible normalization.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **Source issue / normalization of the value group.** The original definition in IV.§5, Exercise 2 requires the value subgroup to contain the standard $\mathbb Z\subseteq\mathbb Z_p$. The literal assertion for an arbitrary surjection $d'$ need not preserve this normalization. Take $G=\mathbb Z_p$, the additive module $A=\mathbb Z$ with trivial action, $d=\mathrm{id}$, and $v=\mathrm{id}$. Norms in finite extensions of index $p^r$ are multiplication by $p^r$, and the Tate group orders satisfy the class field axiom. If $d'=u d$ and $u\in\mathbb Z_p^\times\setminus\mathbb Q$, the definition in the exercise gives $v'=u v$, whose image $u\mathbb Z$ does not contain $1$. Thus the intended unconditional statement requires allowing a new choice of $\mathbb Z_p$ coordinate or relaxing the normalization that the value group contain the standard integers.
> Under the strict definition requiring containment of the fixed standard integers, the counterexample therefore completely disproves the first assertion. It cannot then be claimed to produce a second class field theory satisfying that same definition. No unproved condition on value-group quotients is used here to fill this gap.
>
> A complete argument is available for the **special case of rescaling coordinates in the same direction**. If $d'=u d$, simultaneously multiply the coordinate of the new target $\mathbb Z_p$ by $u^{-1}$. Then
> $$
> u^{-1}d'=d,\qquad u^{-1}v'=v.
> $$
> The second equality follows from the normalization $d\circ\operatorname{Artin}=v$ of the old reciprocity map on the old $\mathbb Z_p$-tower; hence $v'=d'\circ\operatorname{Artin}=u v$. Rescaling recovers the two original maps, rather than constructing a theory in a different direction. If the original value group is $Z=v(A_k)$, the unrescaled image is $uZ$. Multiplication by $u^{-1}$ gives
> $$
> uZ/p^r uZ\xrightarrow{\sim} Z/p^rZ\cong\mathbb Z/p^r\mathbb Z.
> $$
> At every finite level, the norm image likewise changes from $f_KZ$ to $f_KuZ$ and returns to $f_KZ$ after rescaling. The unit kernel is unchanged, so its Tate groups and the class field axiom are unchanged. After rescaling, the valuation, Frobenius coordinate, and norms in the reciprocity construction coincide term by term with the old data, so the residue symbols coincide. This proves coordinate invariance in this special case and explains explicitly why the condition on value-group quotients is preserved.
>
> If rescaling is disallowed and $uZ$ must still contain the fixed standard $\mathbb Z$, that inclusion requires a separate check. It fails in the counterexample with $Z=\mathbb Z$ and $u\notin\mathbb Q$ above. This note does not claim to prove the expected reciprocity independence for an arbitrary different $\mathbb Z_p$-direction $d'$, or use that expectation to justify the literal assertion.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

The statement was checked against the original 200 dpi page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 3, printed p.305, PDF p.324]. The solution is independently derived, using this chapter's conventions for abstract fields, continuous discrete $G$-modules, restrictions, and norms. The counterexample disproves the exercise under the strict definition. The additional argument proves only simultaneous coordinate rescaling in the same direction; it does not claim that an arbitrary new direction satisfies the value-group condition or that general reciprocity independence has been proved.
