---
title: Reduced Positive Definite Binary Quadratic Forms
aliases:
  - Reduced Binary Quadratic Forms
  - Proper Reduction of Integral Binary Quadratic Forms
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - class-groups
created: 2026-10-26
source: "Dorian Goldfeld, Gauss' class number problem for imaginary quadratic fields, Bulletin of the American Mathematical Society (New Series) 13 (1985), §1, printed pp. 24–25, PDF pp. 2–3"
source_status: partially-verified
status: not-started
---

# Reduced Positive Definite Binary Quadratic Forms

## Definition

> [!info] Integral forms and proper equivalence
> An integral binary quadratic form is $Q(x,y)=ax^2+bxy+cy^2$ with $a,b,c\in\mathbb Z$. It is **primitive** if $\gcd(a,b,c)=1$ and **positive definite** if $a>0$ and $D=b^2-4ac<0$. Two forms are **properly equivalent** when one is obtained from the other by an integral change of variables of determinant $1$.
>
> A positive-definite form is **reduced** under our boundary convention if
> $$
> |b|\le a\le c,\qquad
> b\ge0\text{ whenever }|b|=a\text{ or }a=c.
> $$

## Intuition

Reduction chooses a canonical short basis for an oriented integral lattice. The inequalities bound the leading coefficient by the discriminant, turning the classification into a finite search. Orientation matters: determinant-$-1$ changes can identify classes that remain distinct under proper equivalence.

This arithmetic use of integral forms differs from congruence classification of quadratic forms over a field. The latter is treated in [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]].

## Key Properties

1. **Reduction steps.** The determinant-$1$ substitutions $(x,y)\mapsto(x+my,y)$ and $(x,y)\mapsto(-y,x)$ give
   $$
   (a,b,c)\mapsto(a,b+2am,c+bm+am^2),\qquad
   (a,b,c)\mapsto(c,-b,a).
   $$
   Normalize to $-a<b\le a$, then swap if $a>c$. Each such swap strictly decreases the positive leading coefficient. The process therefore terminates; if $a=c,b<0$, a final swap fixes the boundary convention.
2. **Finite bound.** For a reduced form, $|D|=4ac-b^2\ge3a^2$, hence
   $$
   1\le a\le\left\lfloor\sqrt{|D|/3}\right\rfloor.
   $$
   For each $a$, test $|b|\le a$ and $b^2\equiv D\pmod{4a}$, then determine $c=(b^2-D)/(4a)$.
3. **Canonical representative theorem (external input).** Every proper class of primitive positive-definite integral forms of fixed negative discriminant has exactly one reduced representative under this boundary convention. Existence follows from the algorithm above; uniqueness is a separate reduction-theory theorem.
4. **Ideal classes (external input).** For a negative fundamental discriminant $D$, proper primitive form classes correspond to ideal classes of the full ring of integers of $\mathbb Q(\sqrt D)$. Their number is the field class number $h(D)$. For a nonfundamental discriminant, the analogous correspondence concerns a quadratic order, so a full-ring class-number interpretation requires care.

## Examples

> [!example] Three proper classes at discriminant $-23$
> The reduced forms are $(1,1,6)$ and $(2,\pm1,3)$. The sign pair is distinct under proper equivalence, although changing $y$ to $-y$ interchanges it under determinant-$-1$ equivalence.

> [!example] A reduction at discriminant $-11$
> The allowed steps give $(5,7,3)\mapsto(5,-3,1)\mapsto(1,3,5)\mapsto(1,1,3)$.

> [!example] Boundary conventions prevent duplicates
> The forms $(1,1,1)$ and $(1,-1,1)$ are properly equivalent. Only the former satisfies the chosen sign convention on the boundary.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms]]
- [[07 - Modular Forms/Concepts/Quadratic Forms and Theta Series]]
- [[02 - Ring Theory/Concepts/Orders and Conductors]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The original PDF's printed pp. 24–25 / PDF pp. 2–3 were inspected at 200 dpi. Goldfeld discusses determinant-$\pm1$ equivalence before switching to modular-group reduction, states the reduced inequalities, and asserts uniqueness. This note explicitly adopts proper determinant-$1$ equivalence and includes positivity and primitivity.

The transformation formulas, termination, and coefficient bound are independently derived above and in the linked exercise. Canonical uniqueness and the form–ideal correspondence are named external inputs; full proofs of those two theorems are not supplied here. The status is therefore partially verified. The note uses the coefficient convention $ax^2+bxy+cy^2$, with discriminant $b^2-4ac$.
