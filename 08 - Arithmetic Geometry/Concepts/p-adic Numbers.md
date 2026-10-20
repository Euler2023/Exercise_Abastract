---
title: p-adic Numbers
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - number-theory
created: 2026-01-19
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, §§1–7, printed pp. 465–495, PDF pp. 480–510; Serge Lang, Algebraic Number Theory, 2nd ed., Ch. II, printed pp. 31–56, PDF pp. 43–68; Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §1, Definition (1.1), Proposition (1.3), and ring discussion, printed pp. 100, 103–104, PDF pp. 119, 122–123; Exercises 1–6, printed p. 106, PDF p. 125"
source_status: partially-verified
status: not-started
---

# p-adic Numbers

## Motivation

The real numbers $\mathbb{R}$ complete $\mathbb{Q}$ using the usual absolute value. But there are other ways to measure "size" - the $p$-adic valuations give rise to different completions, essential for arithmetic geometry.

## Definition

> [!info] Definition (p-adic Valuation)
> For prime $p$, the **$p$-adic valuation** $v_p: \mathbb{Q}^* \to \mathbb{Z}$ is:
> $$
> v_p\left(\frac{a}{b}\right) = \text{ord}_p(a) - \text{ord}_p(b)
> $$
> where $\operatorname{ord}_p(n)$ is the exponent of $p$ in the prime factorization of $n$.

> [!info] Definition (p-adic Absolute Value)
> $$
> |x|_p = p^{-v_p(x)}
> $$
> Convention: $|0|_p = 0$.

> [!info] Definition (p-adic Numbers)
> The **$p$-adic numbers** $\mathbb{Q}_p$ is the completion of $\mathbb{Q}$ with respect to $|\cdot|_p$.

## Key Properties

> [!abstract] Ultrametric Inequality
> $$
> |x + y|_p \leq \max(|x|_p, |y|_p)
> $$
> with equality if $|x|_p \neq |y|_p$.

This is **much stronger** than the triangle inequality!

> [!tip] Consequences
> - In $\mathbb{Q}_p$, a series $\sum a_n$ converges iff $a_n \to 0$
> - All triangles are isosceles
> - Every point of a "disk" is its center

## The Ring of p-adic Integers

> [!info] Definition ($\mathbb{Z}_p$)
> $$
> \mathbb{Z}_p = \{x \in \mathbb{Q}_p : |x|_p \leq 1\} = \{x \in \mathbb{Q}_p : v_p(x) \geq 0\}
> $$
> This is the **ring of $p$-adic integers**, the closure of $\mathbb{Z}$ in $\mathbb{Q}_p$.

Properties:
- $\mathbb{Z}_p$ is a local ring with maximal ideal $(p) = p\mathbb{Z}_p$
- Residue field: $\mathbb{Z}_p/(p) \cong \mathbb{F}_p$
- $\mathbb{Z}_p$ is a DVR (discrete valuation ring)
- $\mathbb{Z}_p = \varprojlim \mathbb{Z}/p^n\mathbb{Z}$

## p-adic Expansions

> [!info] Theorem
> Every $x \in \mathbb{Z}_p$ has a unique expansion:
> $$
> x = \sum_{n=0}^{\infty} a_n p^n, \quad a_n \in \{0, 1, \ldots, p-1\}
> $$
> Every $x \in \mathbb{Q}_p^*$ has: $x = p^{v_p(x)} \cdot u$ where $u \in \mathbb{Z}_p^*$.

### Compatible Residues and the Ring Structure

Neukirch first defines a $p$-adic integer as a formal digit series [S4, Ch. II, §1, Definition (1.1), printed p. 100, PDF p. 119]. Its successive truncations determine compatible residues

$$
r_n=\sum_{i=0}^{n-1}a_i p^i\bmod p^n,
\qquad r_{n+1}\bmod p^n=r_n.
$$

Conversely, every compatible family has unique such digits: the residue modulo $p^n$ fixes the first $n$ digits, and compatibility preserves those already chosen. Hence

$$
\mathbb Z_p\cong\varprojlim_{n\ge1}\mathbb Z/p^n\mathbb Z
=\left\{(r_n)_{n\ge1}:r_n\in\mathbb Z/p^n\mathbb Z,
\ r_{n+1}\bmod p^n=r_n\right\}.
$$

Addition and multiplication of the residue coordinates preserve compatibility and give the ring structure. These operations include carries in the digit description; they are not coefficientwise digit operations. Two $p$-adic integers are equal exactly when all their residues agree. Every element of $\mathbb Q_p$ becomes integral after multiplication by a suitable power of $p$, and

$$
\mathbb Q_p=\operatorname{Frac}(\mathbb Z_p)=\mathbb Z_p[1/p].
$$

This construction is Proposition (1.3) and the following ring discussion [S4, printed pp. 103–104, PDF pp. 122–123]. See [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]] for the general compatible-family construction.

### Units and the First Digit

For nonzero $x\in\mathbb Q_p$, extend $v_p(x)$ to be the exponent of its first nonzero digit, equivalently the unique integer $k$ in $x=p^ku$ with $u\in\mathbb Z_p^\times$. This agrees with the rational valuation above; set $v_p(0)=\infty$. The first-digit factorization and its product rule are proved in the linked unit exercise, and the passage to quotients is expanded in F128 below.

For $x=\sum_{i\ge0}a_i p^i$, one has

$$
x\in\mathbb Z_p^\times
\quad\Longleftrightarrow\quad a_0\ne0
\quad\Longleftrightarrow\quad v_p(x)=0.
$$

If $a_0\ne0$, every residue of $x$ is invertible modulo $p^n$, and their unique inverses form a compatible family. If $a_0=0$, reduction modulo $p$ prevents $x$ from having an inverse. Thus the nonunits form $p\mathbb Z_p$. The complete independent proof is in [[02 - Ring Theory/Exercises/Exercise R371 - Units among p-adic Integers|Neukirch II.1.2]]; the inverse-limit approach also appears in [[02 - Ring Theory/Exercises/Exercise R224 - The p-Adic Integers as an Inverse Limit|Lang's inverse-limit exercise]].

### Rational Numbers and Eventually Periodic Digits

A $p$-adic number is rational if and only if its digits are eventually periodic. Finite expansions count as having a repeating zero tail. Multiplying by a power of $p$ only shifts the digits, so it suffices to consider $x\in\mathbb Z_p$. A prefix of length $\ell$ followed by a block of length $n\ge1$ gives

$$
x=b+\frac{c p^\ell}{1-p^n},
\qquad 0\le b<p^\ell,\quad 0\le c<p^n,
$$

by summing a convergent $p$-adic geometric series. This proves rationality.

Conversely, write $x=A/B\in\mathbb Z_p$ with integers $A,B$ and $p\nmid B$. Put $A_0=A$, and successively choose the unique $a_k\in\{0,\ldots,p-1\}$ for which

$$
A_{k+1}=\frac{A_k-Ba_k}{p}\in\mathbb Z.
$$

These are the digits of $A/B$. With the ordinary absolute value, all $A_k$ lie in the finite interval $[-C,C]$, where $C=\max(|A|,|B|)$, because $|A_{k+1}|\le(|A_k|+(p-1)|B|)/p$. The next state is determined by the present state, so some state repeats and the subsequent digits are periodic. See [[02 - Ring Theory/Exercises/Exercise R370 - Rational p-adic Numbers and Eventually Periodic Digits|Neukirch II.1.1]] for the full derivation and the printed hint.

### Arithmetic with Digits

For integral inputs $x=\sum a_np^n$ and $y=\sum b_np^n$, compute from the lowest power upward. At stage $n$, include the integer carry $c_n$, choose the output digit $d_n\in\{0,\ldots,p-1\}$ congruent to the stage total $t_n$ modulo $p$, and set

$$
c_0=0,\qquad c_{n+1}=\frac{t_n-d_n}{p}.
$$

For addition use $t_n=a_n+b_n+c_n$; for subtraction use $t_n=a_n-b_n+c_n$, allowing a negative carry (a borrow); for multiplication use $t_n=\sum_{i=0}^n a_i b_{n-i}+c_n$. Each output prefix agrees with the required ring operation modulo its power of $p$.

For division by a unit, choose each new quotient digit so that multiplying the current quotient prefix by the denominator agrees with the numerator modulo $p^{n+1}$. The nonzero first digit of the denominator makes the required linear congruence uniquely solvable. For an arbitrary nonzero denominator, first separate its power of $p$ and shift the resulting expansion; rational inputs may likewise be shifted into $\mathbb Z_p$. Infinite carries or borrows are interpreted through all finite residue prefixes, rather than real convergence. The complete algorithms and correctness proofs are in [[02 - Ring Theory/Exercises/Exercise R374 - Arithmetic with p-adic Digits|Neukirch II.1.6]].

### Abstract Field Automorphisms

> [!abstract] An algebraic description of the valuation ring
> For $x\in\mathbb Q_p$, put $c_p=p$ when $p$ is odd and $c_2=8$. Then
> $$
> x\in\mathbb Z_p
> \quad\Longleftrightarrow\quad
> \exists y\in\mathbb Q_p:\ y^2=1+c_p x^2.
> $$

For integral $x$, the required square root follows from lifting: units congruent to $1$ modulo an odd $p$ are squares, and units congruent to $1$ modulo $8$ are squares in $\mathbb Z_2$. For $v_p(x)<0$ with odd $p$, the valuation $1+2v_p(x)$ of $1+px^2$ is odd, which excludes a square. For $p=2$ and $v_2(x)\le-2$, the same obstruction is $3+2v_2(x)$. The remaining case $x=u/2$ with $u$ a unit gives $1+8x^2=1+2u^2\equiv3\pmod8$, also excluding a square. The lifting facts and the full argument are supplied in [[03 - Field Theory/Exercises/Exercise F128 - Rigidity of the p-adic Field|Neukirch II.1.5]]; compare [[03 - Field Theory/Exercises/Exercise F108 - Automorphisms of p-adic Numbers|Lang's corresponding exercise]].

An abstract field automorphism fixes $\mathbb Q$ and preserves the displayed square predicate, hence preserves $\mathbb Z_p$ and every $p^n\mathbb Z_p$. These ideals form a neighborhood basis of zero, so the automorphism is continuous. Density of $\mathbb Q$ then forces it to be the identity on $\mathbb Q_p$. Continuity is a conclusion here, not an additional assumption on the automorphism.

## Examples

> [!example] Example 1: $-1$ in $\mathbb{Z}_p$
> In $\mathbb{Z}_5$: $-1 = 4 + 4 \cdot 5 + 4 \cdot 5^2 + \cdots = \sum_{n=0}^{\infty} 4 \cdot 5^n$
>
> Check: $1 + (-1) = (1 + 4) + 4 \cdot 5 + \cdots = 5 + 4 \cdot 5 + \cdots = 0$

> [!example] Example 2: $1/2$ in $\mathbb{Z}_5$
> Since $\gcd(2, 5) = 1$, we have $2^{-1} \in \mathbb{Z}_5$.
> $1/2 = 3 + 2 \cdot 5 + 2 \cdot 5^2 + \cdots$ (since $2 \cdot 3 = 6 = 1 + 5$)

> [!example] Example 3: $\sqrt{2}$ in $\mathbb{Q}_7$
> $2 \equiv 2 \pmod 7$ is a quadratic residue mod 7 (since $3^2 = 9 \equiv 2$).
> By Hensel's lemma, $\sqrt{2} \in \mathbb{Q}_7$.

The lifted root is in fact integral, so it lies in $\mathbb Z_7$; a direct residue-lifting construction is given in [[02 - Ring Theory/Exercises/Exercise R372 - A Seven-adic Square Root of Two|Neukirch II.1.3]]. Explicit periodic expansions of $2/3$ and $-2/3$ in base $5$ are worked out in [[02 - Ring Theory/Exercises/Exercise R373 - Five-adic Expansions of Two Thirds and Minus Two Thirds|Neukirch II.1.4]].

## Hensel's Lemma

> [!abstract] Hensel's Lemma
> If $f(x) \in \mathbb{Z}_p[x]$ and $a \in \mathbb{Z}_p$ satisfies:
> - $f(a) \equiv 0 \pmod{p}$
> - $f'(a) \not\equiv 0 \pmod{p}$
>
> Then there exists unique $\alpha \in \mathbb{Z}_p$ with $f(\alpha) = 0$ and $\alpha \equiv a \pmod{p}$.

Under these hypotheses, Newton iteration gives a convergent lifting procedure; the statement does not assert convergence from an arbitrary starting value.

## Structure of $\mathbb{Q}_p^*$

$$
\mathbb{Q}_p^* \cong p^{\mathbb{Z}} \times \mathbb{Z}_p^*
$$

$$
\mathbb{Z}_p^* \cong \mu_{p-1} \times (1 + p\mathbb{Z}_p)
$$

where $\mu_{p-1}$ is the $(p-1)$-th roots of unity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions of $p$-adic absolute value, completion, discrete valuation, $p$-adic expansion, and the complete-field polynomial-lifting background were checked against the cited bounded slices of both Lang books. The examples and group decompositions are independent exposition and have not been checked claim by claim; the note therefore remains partially verified.

Neukirch's formal-digit definition, compatible-residue bijection, and coordinatewise ring construction were visually checked at [S4, Ch. II, §1, Definition (1.1), printed p. 100, PDF p. 119; Proposition (1.3) and ring discussion, printed pp. 103–104, PDF pp. 122–123]. The six exercises, including the periodicity hint, the fractions $2/3$ and $-2/3$, and the abstract-automorphism statement, were checked at [S4, Ch. II, §1, Exercises 1–6, printed p. 106, PDF p. 125]. The unit argument, bounded-remainder periodicity proof, arithmetic summaries, and algebraic square predicate above are independent derivations, with complete solutions in the linked exercise notes. The exercise list itself does not supply those proofs; the existing overall source status is retained.
