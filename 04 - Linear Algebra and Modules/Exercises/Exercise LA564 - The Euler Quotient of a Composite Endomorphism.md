---
title: 'Exercise LA564: The Euler Quotient of a Composite Endomorphism'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 2, printed p. 314, PDF p. 333
source_refs:
- S4/ch-IV/sec-7/ex-2
created: '2026-10-23'
---

# Exercise LA564: The Euler Quotient of a Composite Endomorphism

## Problem Statement

> [!question] Neukirch IV.7.2
> Let $f,g$ be two commuting endomorphisms of an abelian group $A$. Show that
> $$
> q_{0,gf}(A)=q_{0,g}(A)q_{0,f}(A),
> $$
> provided all quotients are defined.

## Hints

> [!hint]- Hint 1
> 这里 $q_{0,f}(A)=\#(A/fA)/\#\ker f$，是端同态的 cokernel/kernel 比。

> [!hint]- Hint 2
> 写出 $f$、$g$、$gf$ 的核和余核的六项正合列，再取有限群阶数。

## Solution

> [!success]- Independent derivation
> 按定义，$q_{0,f}(A)=\#\operatorname{coker}f/\#\ker f$。考虑下列正合列：
> $$
> 0\to\ker f\to\ker(gf)\xrightarrow f\ker g\xrightarrow\delta\operatorname{coker}f\xrightarrow{\bar g}\operatorname{coker}(gf)\to\operatorname{coker}g\to0,
> $$
> 其中 $\delta(y)=y\bmod fA$，$\bar g(a\bmod fA)=ga\bmod gfA$，最后一箭头为自然商映射。
>
> 核处正合性由 $f(a)\in\ker g\iff gf(a)=0$ 及 $\ker f$ 的定义得到。在 $\ker g$，$\delta(y)=0$ 当且仅当 $y=fa$，此时 $a\in\ker(gf)$。在 $\operatorname{coker}f$，$ga\in gfA$ 当且仅当 $a$ 模 $fA$ 可由一个 $\ker g$ 元素表示。在 $\operatorname{coker}(gf)$，到 $\operatorname{coker}g$ 的核恰为 $gA/gfA$，也是 $\bar g$ 的像。因此整列正合。
>
> 取有限群阶数的交替乘积，整理得
> $$
> \frac{\#\operatorname{coker}(gf)}{\#\ker(gf)}
> =\frac{\#\operatorname{coker}g}{\#\ker g}\frac{\#\operatorname{coker}f}{\#\ker f}.
> $$
> 即所求。上述证明事实上不需要 $f,g$ 交换；题面的交换假设当然足够。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Kernels and Cokernels]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 2, printed p. 314, PDF p. 333]. 独立核余核正合列证明。
- **Boundary:** “defined”指所用核与余核都有限，而非把两个无限基数形式相除。
