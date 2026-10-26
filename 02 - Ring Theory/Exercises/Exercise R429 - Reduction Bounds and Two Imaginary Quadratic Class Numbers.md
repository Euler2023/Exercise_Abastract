---
title: "Exercise R429: Reduction Bounds and Two Imaginary Quadratic Class Numbers"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - class-groups
source: "Adapted from Dorian Goldfeld, Gauss' class number problem for imaginary quadratic fields, Bulletin of the American Mathematical Society (New Series) 13 (1985), 23–37, §1, equations (1)–(3) and the reduction discussion before Definition 1, printed pp. 24–25, PDF pp. 2–3"
paper_refs:
  - "paper/goldfeld-1985/sec-1/reduction"
created: 2026-10-26
---

# Exercise R429: Reduction Bounds and Two Imaginary Quadratic Class Numbers

## Problem Statement

> [!question] Adapted reduction and enumeration exercise
> A primitive positive-definite integral binary quadratic form is a triple $(a,b,c)$ with $\gcd(a,b,c)=1$, $a>0$, and discriminant $D=b^2-4ac<0$, representing $Q(x,y)=ax^2+bxy+cy^2$.
>
> Call the form **reduced** when $|b|\le a\le c$, with $b\ge0$ whenever $|b|=a$ or $a=c$. Proper equivalence means change of variables by a matrix in $\operatorname{SL}_2(\mathbb Z)$.
>
> **(a)** Verify the transformations
> $$
> (a,b,c)\mapsto(a,b+2am,c+bm+am^2),\qquad
> (a,b,c)\mapsto(c,-b,a).
> $$
> Prove that repeated translations to $-a<b\le a$ and swaps when $a>c$ terminate in a reduced form. Reduce $(5,7,3)$ explicitly.
>
> **(b)** Prove $a\le\sqrt{|D|/3}$ for a reduced form. Explain why this gives a finite enumeration.
>
> **(c)** Enumerate all primitive reduced forms of discriminants $-23$ and $-163$ and determine the two class numbers using the following named input.
>
> **External standard input:** Each proper class of primitive positive-definite forms of a fixed negative discriminant has a unique reduced representative with the stated boundary convention. For a negative **fundamental** discriminant $D$, proper form classes correspond to ideal classes of the full ring of integers of $\mathbb Q(\sqrt D)$. The uniqueness assertion is stated in Goldfeld's reduction discussion; the ideal-class correspondence is an imported classical theorem.

## Hints

> [!hint]- Hint 1
> Use $Q(x+my,y)$ and $Q(-y,x)$. A swap after normalization strictly decreases the positive integer leading coefficient.

> [!hint]- Hint 2
> Use $|D|=4ac-b^2\ge3a^2$. For each possible $a$, test $-a\le b\le a$ and $b^2\equiv D\pmod{4a}$, then set $c=(b^2-D)/(4a)$ and apply the boundary rule.

## Solution

> [!success]- Solution
> **Proof scope:** Independent reduction algorithm, bound, and exact enumeration, with the two explicitly named class-identification inputs.
>
> **(a)** Expanding $Q(x+my,y)$ gives the first transformation. Expanding $Q(-y,x)$ gives the second. Both changes have determinant $1$ and integral inverses, so preserve positive definiteness, discriminant, and primitivity.
>
> Given $a>0$, select $m$ so that $-a<b+2am\le a$. If the new leading and trailing coefficients satisfy $a>c$, swap. The new leading coefficient is then a strictly smaller positive integer. Repeat normalization and comparison; only finitely many swaps are possible, and each normalization requires a single translation. At termination, $-a<b\le a\le c$. If $a=c$ and $b<0$, one final swap changes $b$ to $-b$ and preserves the other inequalities. This is reduced.
>
> For the requested example,
> $$
> (5,7,3)\xrightarrow{m=-1}(5,-3,1)
> \xrightarrow{\mathrm{swap}}(1,3,5)
> \xrightarrow{m=-1}(1,1,3).
> $$
> All four forms have discriminant $-11$.
>
> **(b)** Since $c\ge a$ and $b^2\le a^2$,
> $$
> |D|=4ac-b^2\ge4a^2-a^2=3a^2.
> $$
> Thus $1\le a\le\lfloor\sqrt{|D|/3}\rfloor$. For each $a$ there are finitely many integers $b$ with $|b|\le a$; $c$ is then forced by $c=(b^2-D)/(4a)$. Integrality, primitivity, $c\ge a$, and the boundary rule are explicit finite tests.
>
> **(c)** For $D=-23$, the bound is $a\le2$. For $a=1$ the congruence $b^2\equiv-23\pmod4$ gives $b=\pm1$, and the boundary rule keeps $b=1$, giving $c=6$. For $a=2$, the congruence modulo $8$ gives $b=\pm1$, yielding $c=3$. Thus the complete list is
> $$
> (1,1,6),\qquad (2,1,3),\qquad(2,-1,3).
> $$
> Each is primitive and reduced.
>
> For $D=-163$ the bound is $a\le7$. The complete congruence test is
> $$
> \begin{array}{c|rrrrrrr}
> a&1&2&3&4&5&6&7\\ \hline
> -163\bmod4a&1&5&5&13&17&5&5\\
> b\text{ with }|b|\le a,\ b^2\equiv-163\ (4a)
> &\pm1&\varnothing&\varnothing&\varnothing&
> \varnothing&\varnothing&\varnothing
> \end{array}
> $$
> The boundary rule keeps only $b=1$, giving $(a,b,c)=(1,1,41)$. This form is primitive and reduced.
>
> Both $23$ and $163$ are square-free and their negatives are $1$ modulo $4$, so these are fundamental discriminants. The stated uniqueness theorem and ideal-class correspondence now give
> $$
> h(-23)=3,\qquad h(-163)=1.
> $$
> Proper equivalence is essential: replacing $y$ by $-y$ has determinant $-1$ and interchanges $(2,1,3)$ and $(2,-1,3)$. Identifying them would count improper-equivalence classes instead of the proper classes defining $h(D)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Reduced Positive Definite Binary Quadratic Forms]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms]]

## Notes

- **Adaptation:** Goldfeld's discussion becomes explicit reduction, termination, and finite-enumeration tasks. These subparts are independently composed, rather than numbered exercises in the paper.
- **Convention:** Goldfeld first discusses determinant $\pm1$ equivalence on printed p. 24, then uses modular-group reduction. This exercise explicitly chooses proper determinant-$1$ equivalence for class-number counting and includes positivity and primitivity.
- **Proof boundary:** Existence is proved here by the algorithm. Uniqueness of reduced representatives and the form–ideal correspondence are named external inputs; the paper states the former without a full proof in the inspected slice.
- **Routing:** Integral forms are used to count ideal classes, rather than to classify quadratic forms over a field. Arithmetic congruences and ideal classes place the exercise in Ring Theory.
