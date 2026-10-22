---
title: 'Exercise R409: Class Number One for the Intended Quintic Field'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 5, printed p. 414, PDF p. 433
source_refs:
- S4/ch-VI/sec-7/ex-5
created: '2026-10-23'
proof_status: source-ambiguity
---

# Exercise R409: Class Number One for the Intended Quintic Field

## Problem Statement

> [!question] Neukirch VI.7.5
> $K$ has class number $1$.
> **Printed hint:** Show, using chap. I, §6, exercise 3, that every ideal class of $K$ contains an ideal $\mathfrak a$ with $\mathfrak N(\mathfrak a)<4$. If $\mathfrak N(\mathfrak a)\ne1$, then $\mathfrak a$ has to be a prime ideal $\mathfrak p$ such that $\mathfrak N(\mathfrak p)=2$ or $3$. Hence $\mathcal O_k/\mathfrak p=\mathbb Z/2\mathbb Z$ or $=\mathbb Z/3\mathbb Z$, so $f$ has a root mod $2$ or $3$, which is not the case.

> [!warning] Source issue / proof scope
> The printed capital K is the degree-120 splitting field; the hint computes the degree-five field k. Only h_k=1 is proved here. The original capital-K assertion remains unproved.

> [!warning] Source issue — capital K and lowercase k
> The original assertion names the degree-120 splitting field $K$, whereas its hint switches to $\mathcal O_k$ and the degree-five Minkowski bound. The derivation below proves $h_k=1$. The printed assertion $h_K=1$ remains unproved in this note.

## Hints

> [!hint]- 提示
> Compute the Minkowski bound for the degree-five field $k$. Check whether the hint can apply to the degree-120 splitting field $K$.

> [!hint]- Stronger hint
> The degree-five field has signature (1,2), giving a Minkowski bound less than 4; neither 2 nor 3 has a residue-degree-one prime.

## Solution

> [!success]- 独立推导
> **Source issue.** 原题印大写 $K$，而提示明确使用小写 $k$ 的整数环和五次域的 Minkowski 界。以下证明提示所指的修正版 $h_k=1$；不能据此声称已经证明度 $120$ 的分裂域 $K$ 的类数。
> 令 $r=5^{-1/4}$。$f'=5X^4-1$ 的实临界点为 $\pm r$，且 $f(-r)=1+4r/5>0$，$f(r)=1-4r/5>0$。所以五次多项式只有一个实根，$k$ 的签名为 $(r_1,r_2)=(1,2)$。
> Minkowski 理想类界给每类一个整理想 $\mathfrak a$，满足
> $$
> N\mathfrak a\le
> \left(\frac4\pi\right)^2\frac{5!}{5^5}\sqrt{2869}
> \approx3.3344<4.
> $$
> 因此若其范数不为 $1$，只能为 $2$ 或 $3$，而整理想的素数范数强迫它是剩余次数一的素理想。因 $\mathcal O_k=\mathbb Z[\alpha]$，这样的素理想对应 $f$ 在 $\mathbb F_2$ 或 $\mathbb F_3$ 中的根。直接代入分别所有 $2$、$3$ 个剩余类，均得非零，故不存在。这迫使 $N\mathfrak a=1$，$\mathfrak a=\mathcal O_k$，每个理想类平凡。
> Minkowski 数值界已实际计算复核，所得 $3.3343926176$。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

题面已与原书 200 dpi 图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §7, Exercise 5, printed p.414, PDF p.433]。解答为独立推导。原大写 $K$ 的类数断言在本笔记中保持未证明；只有有提示支持的小写 $k$ 修正版已完成。

- **Source context:** Here $f=X^5-X+1$, $k=\mathbb Q(\alpha)$, and $K$ is its degree-$120$ splitting field from Exercises 2–4. The printed hint also begins with capital $K$ and later writes $\mathcal O_k$; both are preserved above.
