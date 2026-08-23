---
title: Mordell-Weil Theorem
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - theorem
created: 2026-01-19
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, §7.7, printed p. 298, PDF p. 311"
source_status: partially-verified
status: not-started
---

# Mordell-Weil Theorem

## Statement

> [!abstract] Theorem (Mordell-Weil)
> Let $A$ be an abelian variety over a number field $K$. Then the group of $K$-rational points $A(K)$ is **finitely generated**:
> $$
> A(K) \cong \mathbb{Z}^r \oplus A(K)_{\text{tors}}
> $$
> where $r \geq 0$ is the **rank** and $A(K)_{\text{tors}}$ is a finite group.

For elliptic curves, this was proved by Mordell (1922) over $\mathbb{Q}$ and extended by Weil (1928) to abelian varieties over number fields.

## The Rank

> [!info] Definition (Rank)
> The **rank** of $A(K)$ is the number $r$ of independent points of infinite order.

| Rank | Meaning |
|------|---------|
| $r = 0$ | $A(K)$ is finite (only torsion) |
| $r = 1$ | One generator of infinite order |
| $r \geq 2$ | Multiple independent generators |

## Proof Outline

The proof has two main steps:

### Step 1: Weak Mordell-Weil

> [!abstract] Theorem (Weak Mordell-Weil)
> For any $n \geq 2$, the group $A(K)/nA(K)$ is finite.

This uses:
- Kummer theory / descent
- Finiteness of class group and unit group
- Selmer groups

### Step 2: Descent

Combined with the theory of [[08 - Arithmetic Geometry/Concepts/Heights|heights]]:

> [!abstract] Descent Lemma
> If $A(K)/nA(K)$ is finite and $\hat{h}$ is the canonical height, then $A(K)$ is finitely generated.

The key is: the set $\{P \in A(K) : \hat{h}(P) \leq C\}$ is finite (Northcott), and we can descend using $\hat{h}([n]P) = n^2 \hat{h}(P)$.

## Computing the Rank

> [!warning] Difficulty
> Computing the rank is a **hard problem**! No algorithm is known to work in all cases.

Methods:
1. **Descent**: Compute Selmer groups, bound rank
2. **BSD conjecture**: Relate rank to $L$-function (conjectural)
3. **Heights**: Find generators by searching

## Examples

> [!example] Consequences of the decomposition
> If $r=0$, then $A(K)$ is finite and equals its torsion subgroup. If $r=1$, then choosing one non-torsion point whose image generates the free quotient gives $A(K)\cong A(K)_{\mathrm{tors}}\oplus\mathbb Z$. Determining $r$ and proving that proposed points generate are separate arithmetic computations, not consequences of the abstract theorem alone.

## Connection to BSD

> [!abstract] BSD Conjecture (Analytic Rank)
> $$
> \text{rank}(E(\mathbb{Q})) = \text{ord}_{s=1} L(E, s)
> $$

So far proved only for rank 0 and 1 (Gross-Zagier, Kolyvagin).

## Generalizations

- **Number fields**: Mordell-Weil holds for $A(K)$ where $K$ is any number field
- **Function fields / finitely generated extensions**: the Lang–Néron theorem asserts finite generation after quotienting by the rational points of the $K/k$-trace; extra hypotheses on the constant field are needed before simplifying this to finite generation of $A(K)$ itself.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/BSD Conjecture|BSD Conjecture]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Eight-source audit: Diamond–Shurman explicitly state that for an elliptic curve $E/\mathbb Q$, the group of rational points has the form $T\oplus\mathbb Z^r$, with $T$ the torsion subgroup [S7, §7.7, printed p. 298, PDF p. 311]. This verifies the elliptic-curve-over-$\mathbb Q$ statement, but the book invokes rather than proves Mordell–Weil. The general abelian-variety/number-field theorem, weak Mordell–Weil, height descent, rank algorithms, and Lang–Néron refinement remain external. The note is `partially-verified`; no checked source proves its proof outline.
