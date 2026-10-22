---
title: Formal Groups and Lubin Tate Modules
aliases:
  - Formal Groups
  - Lubin Tate Formal Groups
  - Lubin-Tate Modules
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
created: 2026-10-23
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, (4.1)–(4.5), printed pp. 342–343, PDF pp. 361–362"
source_status: verified-bounded
---

# Formal Groups and Lubin Tate Modules

## Definition

> [!info] One-dimensional commutative formal group
> A formal group law is $F(X,Y)\in A[[X,Y]]$ with $F=X+Y\bmod\deg2$, $F(X,Y)=F(Y,X)$ and $F(X,F(Y,Z))=F(F(X,Y),Z)$. A homomorphism $f:F\to G$ is a zero-constant-term series satisfying $f(F(X,Y))=G(f(X),f(Y))$.

## Intuition

The law encodes a group operation near zero without assuming the series converges everywhere. Over a complete valuation ring it can be evaluated on the maximal ideal; the formal inverse and identity follow from its coefficient identities.

## Key Properties

- The additive law is $X+Y$, and the multiplicative law is $X+Y+XY$. The latter becomes ordinary multiplication under $x\mapsto1+x$.
- A formal module adds a specified coefficient-ring action $a\mapsto[a]_F$; this is additional structure beyond a formal group over that ring.
- In characteristic zero, a formal logarithm over the fraction field linearizes the group law. Denominators must be controlled before asserting integrality over the valuation ring.
- Lubin–Tate theory uses a chosen uniformizer $\pi$ and an endomorphism with $[\pi](X)\equiv\pi X\bmod X^2$, $[\pi](X)\equiv X^q\bmod\pi$. Its division points realize totally ramified abelian local extensions.

## Examples

In characteristic $p$, $X^p$ is an endomorphism of the formal additive group. Therefore the endomorphism ring of that group over an arbitrary characteristic-p ring is not merely its scalar ring. Over a torsion-free characteristic-zero ring the additive homomorphism equation forces all coefficients of degree greater than one to vanish. This boundary is relevant to the first formal-group exercise.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

## Exercises

```dataview
TABLE topic, status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, (4.1)–(4.5), printed pp. 342–343, PDF pp. 361–362. Definitions and the cited source results were checked in bounded original-page slices. This concept distinguishes the source statements from the independent exercise proofs; the named structural theorems are cited inputs here, not reproved in full. Source issues and corrected exercise statements remain visible in the linked notes.
