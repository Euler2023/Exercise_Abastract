---
title: Square Classes and Multiquadratic Extensions
topic: galois-theory
tags:
  - concept
  - galois-theory
  - square-classes
  - multiquadratic-extensions
created: 2026-08-12
---

# Square Classes and Multiquadratic Extensions

## Definition

> [!info] Square-class group
> Let $F$ be a field with $\operatorname{char}F\ne2$. The subgroup of nonzero squares is
> $$
> F^{\times2}=\{u^2:u\in F^\times\}.
> $$
> The quotient $F^\times/F^{\times2}$ is the **square-class group** of $F$. Every element has order dividing $2$, so it is naturally a vector space over $\mathbb F_2$.

> [!info] Multiquadratic extension
> An extension of the form
> $$
> F(\sqrt{d_1},\ldots,\sqrt{d_r})/F
> $$
> is multiquadratic. It has degree $2^r$ exactly when the classes $[d_1],\ldots,[d_r]$ are linearly independent in $F^\times/F^{\times2}$.

## Intuition

Multiplying a radicand by a square does not change the generated quadratic field. Thus quadratic extensions depend on square classes rather than on individual elements. Independence of square classes is precisely what allows the signs of the corresponding square roots to be changed independently.

## Key Properties

- Every nontrivial square class $[d]$ determines the quadratic extension $F(\sqrt d)/F$.
- Two elements $d,e\in F^\times$ determine the same quadratic extension if and only if $d/e\in F^{\times2}$.
- If $[d_1],[d_2]$ are independent, then
  $$
  F(\sqrt{d_1},\sqrt{d_2})/F
  $$
  is Galois with group $C_2^2$ and has exactly three quadratic intermediate fields:
  $$
  F(\sqrt{d_1}),\qquad F(\sqrt{d_2}),\qquad F(\sqrt{d_1d_2}).
  $$
- More generally, $r$ independent square classes produce a Galois group $C_2^r$.
- The condition $|F^\times:F^{\times2}|>2$ is equivalent to the existence of two independent nontrivial square classes.

## Examples

> [!example] Rational square classes
> The classes of distinct primes are independent in $\mathbb Q^\times/\mathbb Q^{\times2}$. Hence
> $$
> [\mathbb Q(\sqrt2,\sqrt3,\sqrt5):\mathbb Q]=8
> $$
> and its Galois group is $C_2^3$.

> [!example] Degeneration
> If $d_2=d_1u^2$ for some $u\in F^\times$, then $F(\sqrt{d_1},\sqrt{d_2})=F(\sqrt{d_1})$. The apparent two-radical construction has degree only $2$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

These statements are standard consequences of quadratic-extension theory and the Galois correspondence. The organization and proofs used in the linked exercises are independent derivations in this vault.
